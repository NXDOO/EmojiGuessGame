import { riddleBank, Riddle, getMixedRiddles, categoryNames } from './data';

// --- Audio ---
let audioContext: AudioContext | null = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
}

function playCorrectSound() {
    initAudio();
    if (!audioContext) return;
    
    const ctx = audioContext;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.setValueAtTime(1108, ctx.currentTime + 0.05);
    oscillator.frequency.setValueAtTime(1318, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.4);
}

function playWrongSound() {
    initAudio();
    if (!audioContext) return;
    
    const ctx = audioContext;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(150, ctx.currentTime);
    oscillator.frequency.setValueAtTime(120, ctx.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
}

// --- State ---
let TOTAL_QUESTIONS = 10;
let selectedCategories: string[] = ['idiom']; // Default only idiom
let currentQuestions: Riddle[] = [];
let currentIndex = 0;
let score = 0;
let isProcessing = false;
let currentRotation = 0;

// --- DOM Elements ---
const startScreen = document.getElementById('start-screen')!;
const gameScreen = document.getElementById('game-screen')!;
const resultScreen = document.getElementById('result-screen')!;

const btnStart = document.getElementById('btn-start')!;
const btnOpenSettings = document.getElementById('btn-open-settings')!;
const btnConfirmBank = document.getElementById('btn-confirm-bank')!;
const btnCloseModal = document.getElementById('btn-close-modal')!;
const bankModal = document.getElementById('bank-modal')!;
const currentBankDisplay = document.getElementById('current-bank-display')!;
const currentCountDisplay = document.getElementById('current-count-display')!;

const btnSubmit = document.getElementById('btn-submit')!;
const btnSkip = document.getElementById('btn-skip')!;
const btnNext = document.getElementById('btn-next')!;
const btnRestart = document.getElementById('btn-restart')!;
const btnDebug = document.getElementById('btn-debug')!;

const emojiDisplay = document.getElementById('emoji-display')!;
const hintText = document.getElementById('hint-text')!;
const feedbackContainer = document.getElementById('feedback-container')!;
const inputAnswer = document.getElementById('answer-input') as HTMLInputElement;
const scoreVal = document.getElementById('score-val')!;
const progressVal = document.getElementById('progress-val')!;

const feedbackIcon = document.getElementById('feedback-icon')!;
const feedbackText = document.getElementById('feedback-text')!;
const feedbackAnswer = document.getElementById('feedback-answer')!;

const finalScoreVal = document.getElementById('final-score-val')!;
const resultComment = document.getElementById('result-comment')!;

// --- Settings & Modal ---
const BANK_LABELS: {[key:string]: string} = {
    'idiom': '🏮 成语',
    'food': '🍜 美食',
    'movie': '🎬 影视',
    'music': '🎵 音乐'
};

function openSettings() {
    bankModal.classList.remove('hidden');
    // Start animation next frame
    requestAnimationFrame(() => {
        bankModal.classList.add('active');
    });
}

function closeSettings() {
    bankModal.classList.remove('active');
    setTimeout(() => {
        bankModal.classList.add('hidden');
    }, 300); // Wait for transition
}

function updateSettingsDisplay() {
    // Bank Display
    if (selectedCategories.length === 0) {
        currentBankDisplay.textContent = '未选择';
    } else if (selectedCategories.length === 1) {
        const c = selectedCategories[0];
        currentBankDisplay.textContent = BANK_LABELS[c] || c;
    } else {
        currentBankDisplay.textContent = `多种题库 (${selectedCategories.length})`;
    }
    
    // Count Display
    currentCountDisplay.textContent = `${TOTAL_QUESTIONS} 题`;
}

function handleSettingsConfirm() {
    // Get selected categories
    const checkboxes = document.querySelectorAll('input[name="bank"]:checked') as NodeListOf<HTMLInputElement>;
    const newCategories = Array.from(checkboxes).map(cb => cb.value);
    
    if (newCategories.length === 0) {
        alert('请至少选择一个题库！');
        return;
    }
    
    selectedCategories = newCategories;
    
    // Get selected count
    const countRadio = document.querySelector('input[name="count"]:checked') as HTMLInputElement;
    TOTAL_QUESTIONS = parseInt(countRadio?.value || '10');
    
    updateSettingsDisplay();
    closeSettings();
}

// --- Initialization ---
function initGame() {
    // Game is initialized using global variables selectedCategories & TOTAL_QUESTIONS
    // which are either default or updated by handleSettingsConfirm.
    const allRiddles = getMixedRiddles(selectedCategories);
    const shuffled = [...allRiddles].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, shuffled.length));
    
    // Adjust total if not enough questions
    if (currentQuestions.length < TOTAL_QUESTIONS) {
        TOTAL_QUESTIONS = currentQuestions.length;
        // updateTotalCount(); // Removed
    }
    
    currentIndex = 0;
    score = 0;
    isProcessing = false;
    currentRotation = 0;
    
    // Reset UI state
    feedbackContainer.style.display = 'none';
    feedbackContainer.style.opacity = '0';
    hintText.style.display = 'block';

    updateScoreUI();
    showScreen('game');
    loadQuestion();
}

function showScreen(name: 'start' | 'game' | 'result') {
    startScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    if (name === 'start') {
        startScreen.classList.add('active');
        initSlotMachine();
    }
    if (name === 'game') gameScreen.classList.add('active');
    if (name === 'result') resultScreen.classList.add('active');
}

function loadQuestion() {
    const q = currentQuestions[currentIndex];
    
    // Reset display for new question
    feedbackContainer.style.display = 'none';
    feedbackContainer.style.opacity = '0';
    hintText.style.display = 'block';
    
    // Slight animation for new question
    emojiDisplay.style.transform = 'scale(0.8)';
    emojiDisplay.style.opacity = '0';
    setTimeout(() => {
        emojiDisplay.textContent = q.emojis.join(' ');
        emojiDisplay.style.transform = 'scale(1)';
        emojiDisplay.style.opacity = '1';
    }, 150);
    progressVal.textContent = `${currentIndex + 1}/${TOTAL_QUESTIONS}`;
    inputAnswer.value = '';
    
    // Update hint based on answer length
    const answerLen = q.answer.length;
    
    // Look up category label from q.hintLabel (per question) or categoryNames map (per category) or fallback
    let categoryLabel = q.hintLabel || categoryNames[q.category] || '答案';

    hintText.innerHTML = `请输入 <span style="color:var(--primary-red); font-weight:bold; font-size:1.2em;">${answerLen}</span> 字的${categoryLabel}`;
    inputAnswer.placeholder = `请输入 ${answerLen} 字的${categoryLabel}...`;
    
    if (window.innerWidth > 600) {
        setTimeout(() => inputAnswer.focus(), 300);
    }
    
    btnSubmit.style.display = 'inline-block';
    btnNext.style.display = 'none';

    btnSubmit.disabled = false;
    btnSkip.disabled = false;
    inputAnswer.disabled = false;
    isProcessing = false;
}

function checkAnswer() {
    if (isProcessing) return;
    
    const userVal = inputAnswer.value.trim();
    if (!userVal) return;
    
    handleAnswerSubmission(userVal);
}

function skipQuestion() {
    if (isProcessing) return;
    handleAnswerSubmission(null);
}

function handleAnswerSubmission(userVal: string | null) {
    isProcessing = true;
    inputAnswer.blur();
    inputAnswer.disabled = true;
    btnSubmit.disabled = true;
    btnSkip.disabled = true;

    const q = currentQuestions[currentIndex];
    const correctAnswers = [q.answer, ...(q.aliases || [])];
    
    let isCorrect = false;

    if (userVal) {
        isCorrect = correctAnswers.some(ans => ans === userVal);
    }

    if (isCorrect) {
        score += 10;
        showFeedback(true, q.answer, q.description);
        playCorrectSound();
    } else {
        showFeedback(false, q.answer, q.description);
        playWrongSound();
    }
    
    updateScoreUI();
}

function showFeedback(isCorrect: boolean, correctAnswer: string, description?: string) {
    if (isCorrect) {
        // Party face
        feedbackIcon.textContent = '🥳';
        feedbackText.textContent = '回答正确';
        feedbackText.style.color = 'rgb(14 161 75)'; // Custom Green
    } else {
        // Updated wrong emoji
        feedbackIcon.textContent = '😅';
        feedbackText.textContent = '回答错误'; 
        feedbackText.style.color = '#c62828'; // Dark red
    }
    feedbackAnswer.textContent = `答案：${correctAnswer}`;
    
    // Check if description element exists, if not create it
    let feedbackDesc = document.getElementById('feedback-desc');
    if (!feedbackDesc) {
        feedbackDesc = document.createElement('div');
        feedbackDesc.id = 'feedback-desc';
        // Reset styles for flex layout context
        feedbackDesc.style.fontSize = '0.9rem';
        feedbackDesc.style.color = '#777';
        feedbackDesc.style.marginTop = '2px';
        feedbackAnswer.parentNode?.appendChild(feedbackDesc);
    }
    
    // Update description text if available
    if (description) {
        feedbackDesc.textContent = description;
        feedbackDesc.style.display = 'block';
    } else {
        feedbackDesc.style.display = 'none';
    }
    
    btnSubmit.style.display = 'none';
    btnNext.style.display = 'inline-block';

    // Show feedback overlay
    hintText.style.display = 'none';
    feedbackContainer.style.display = 'flex';
    // Trigger reflow
    feedbackContainer.offsetHeight; 
    feedbackContainer.style.opacity = '1';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= TOTAL_QUESTIONS) {
        endGame();
    } else {
        loadQuestion();
    }
}

function endGame() {
    showScreen('result');
    finalScoreVal.textContent = score.toString();
    
    const percentage = score / (TOTAL_QUESTIONS * 10);
    if (percentage === 1) resultComment.textContent = "太神了！全部答对！你就是灯谜财神爷！🎉";
    else if (percentage >= 0.8) resultComment.textContent = "太厉害了！新春好运滚滚来！💰";
    else if (percentage >= 0.6) resultComment.textContent = "不错的成绩！祝你新年快乐！🏮";
    else resultComment.textContent = "再接再厉！多吃点饺子补补脑！🥟";
}

function updateScoreUI() {
    scoreVal.textContent = score.toString();
}

// --- Event Listeners ---
btnOpenSettings.addEventListener('click', openSettings);
btnConfirmBank.addEventListener('click', handleSettingsConfirm);
btnCloseModal.addEventListener('click', closeSettings);
bankModal.addEventListener('click', (e) => {
    if (e.target === bankModal) closeSettings();
});

btnStart.addEventListener('click', initGame);
btnSubmit.addEventListener('click', checkAnswer);
btnSkip.addEventListener('click', skipQuestion);

inputAnswer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (!isProcessing && btnSubmit.style.display !== 'none') {
            e.stopPropagation(); // Prevent bubbling to document to avoid triggering nextQuestion immediately
            checkAnswer();
        }
    }
});

// Global Enter key handler for moving to next question when input is disabled
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Only trigger if game screen is active and Next button is visible
        if (gameScreen.classList.contains('active') && btnNext.style.display !== 'none') {
            nextQuestion();
        }
    }
});

inputAnswer.addEventListener('focus', () => {
    // Mobile optimization: verify viewport is constrained
    if (window.innerHeight < 800 || window.innerWidth < 800) {
        setTimeout(() => {
            inputAnswer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
});

btnNext.addEventListener('click', nextQuestion);

btnDebug.addEventListener('click', () => {
    alert(riddleBank.map((r, i) => 
        `${i+1}. ${r.emojis.join('')} = ${r.answer}`
    ).join('\n'));
});
btnRestart.addEventListener('click', () => {
    showScreen('start');
});

function initEmojiRain() {
    const container = document.getElementById('bg-animation');
    if (!container) return;
    
    // Clear existing to avoid buildup on hot reloads or restarts
    container.innerHTML = '';

    const emojis = ['🧧', '💰', '🏮', '✨', '🐴', '🌸', '🍊', '🧨', '🐟', '🍍', '🥁', '🦁'];
    const amount = 7; // Reduced amount for cleaner look

    for (let i = 0; i < amount; i++) {
        const span = document.createElement('span');
        span.classList.add('falling-emoji');
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random properties
        const left = Math.random() * 100;
        const duration = 8 + Math.random() * 12; // Faster: 8-20s
        const delay = Math.random() * 10;
        const size = 1.5 + Math.random() * 1.0; // Size variation: 1.5rem - 2.5rem

        span.style.left = `${left}%`;
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `${delay}s`;
        span.style.fontSize = `${size}rem`;

        container.appendChild(span);
    }
}

function initSlotMachine() {
    const container = document.getElementById('slots-container');
    if (!container) return;
    container.innerHTML = '';

    // Fixed combo per user request
    const target = ['🐲', '🐎', '🪞', '🪢']; 
    const candidates = ['🧧', '🍊', '🏮', '✨', '💰', '🧨', '🐟', '🍍'];

    target.forEach((char, index) => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.transition = `transform ${1.5 + index * 0.5}s cubic-bezier(0.2, 0, 0.2, 1)`; 
        
        const stripLength = 15 + index * 5; 
        
        const items = [char];
        for (let i = 0; i < stripLength; i++) items.push(candidates[Math.floor(Math.random() * candidates.length)]);
        
        wrapper.innerHTML = items.map(c => `<div class="slot-item" style="height: 1.8em;">${c}</div>`).join('');
        
        const totalItems = items.length;
        wrapper.style.transform = `translateY(-${((totalItems - 1) / totalItems) * 100}%)`;

        const slotWindow = document.createElement('div');
        slotWindow.style.height = '1.8em';
        slotWindow.style.overflow = 'hidden';
        slotWindow.style.display = 'inline-block';
        slotWindow.appendChild(wrapper);
        
        container.appendChild(slotWindow);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                wrapper.style.transform = 'translateY(0)';
            });
        });
    });
}

initEmojiRain();
initSlotMachine();

