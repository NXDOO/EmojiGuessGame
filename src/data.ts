export interface Riddle {
    answer: string;
    aliases?: string[];
    emojis: string[];
    category: string;
    hintLabel?: string; // 自定义提示文本（替换默认的"成语"、"电影名称"等）
    description?: string; // 补充描述（如歌手、导演、出处等）
}

// 默认分类显示名称映射
export const categoryNames: {[key: string]: string} = {
    idiom: '成语',
    food: '美食',
    movie: '电影',
    music: '歌曲',
};

// 成语题库
export const idiomBank: Riddle[] = [
    { emojis: ["❤️", "💭", "✅"], answer: "心想事成", category: "idiom" },
    { emojis: ["🏠", "👨‍👩‍👧‍👦", "😄"], answer: "阖家欢乐", category: "idiom" },
    { emojis: ["🟥", "☁️", "👑"], answer: "鸿运当头", category: "idiom" },
    { emojis: ["💰", "⭕️", "🌊"], answer: "财源滚滚", category: "idiom" },
    { emojis: ["🐲", "🐎", "💪", "🔥"], answer: "龙马精神", category: "idiom" },
    { emojis: ["🐔","⭐","🔦"], answer: "吉星高照", category: "idiom" },
    { emojis: ["💵", "🌽", "🏠"], answer: "金玉满堂", category: "idiom" },
    { emojis: ["👣", "👣", "⬆️"], answer: "步步高升", category: "idiom" },
    { emojis: ["🌸", "🌕"], answer: "花好月圆", category: "idiom" },
    { emojis: ["😊", "💨", "🐑", "🐑"], answer: "喜气洋洋", category: "idiom" },
    { emojis: ["⛵", "💨" , "🔁"], answer: "一帆风顺", category: "idiom" },
    { emojis: ["🌸", "☀️", "🍂", "❄️", "🍎"], answer: "四季平安", category: "idiom" },
    { emojis: ["🧧", "🧧", "🧧", "🧧", "🧧", "🚪"], answer: "五福临门", category: "idiom" },
    { emojis: ["💰", "🛣️"], answer: "财运亨通", category: "idiom" }, 
    { emojis: ["💧", "🌊", "🙅🏻‍♀️", "⌛️"], answer: "滴水不漏", category: "idiom" },
    { emojis: ["🐔", "✈️", "🐶", "💃"], answer: "鸡飞狗跳", category: "idiom" },
    { emojis: ["👩", "🐏", "🐴", "⛵"], answer: "人仰马翻", category: "idiom" },
    { emojis: ["🪨", "🐦", "🐦"], answer: "一石二鸟", category: "idiom" },
    { emojis: ["🎨", "🐍", "➕", "🦶"], answer: "画蛇添足", category: "idiom" },
    { emojis: ["🙉",  "🤏","🔔"], answer: "掩耳盗铃", category: "idiom" },
    { emojis: ["🪞", "🏹", "🐦"], answer: "惊弓之鸟", category: "idiom" },
    { emojis: ["🐸", "🕳️", "👀"], answer: "井底之蛙", category: "idiom" },
    { emojis: ["🦊", "🐯", "💪"], answer: "狐假虎威", category: "idiom" },
    { emojis: ["👆", "🦌", "🗣️", "🐎"], answer: "指鹿为马", category: "idiom" },
    { emojis: ["🔥", "➕", "🛢️"], answer: "火上浇油", category: "idiom" },
    { emojis: ["🐕", "🏃", "🧱"], answer: "狗急跳墙", category: "idiom" },
    { emojis: ["🚪", "👀", "⛰️"], answer: "开门见山", category: "idiom" },
    { emojis: ["👄", "🍯", "🤰","🗡️"], answer: "口蜜腹剑", category: "idiom" },
    { emojis: ["🚗", "💧", "🐴", "🐉"], answer: "车水马龙", category: "idiom" },
    { emojis: ["❄️", "🚚", "🪨"], answer: "雪中送炭", category: "idiom" },
    { emojis: ["🍏", "♣️", "🎋", "🐎"], answer: "青梅竹马", category: "idiom" },
    { emojis: ["3️⃣", "🗣️", "6️⃣", "💪"], answer: "三头六臂", category: "idiom" },
    { emojis: ["❤️", "❤️", "🐘", "🐾"], answer: "心心相印", category: "idiom" },
    { emojis: ["#️⃣", "#️⃣", "👮"], answer: "井井有条", category: "idiom" },
    { emojis: ["7️⃣", "⬆️", "8️⃣", "⬇️"], answer: "七上八下", category: "idiom" },
    { emojis: ["🧷", "🌄", "❤️", "🌈"], answer: "别出心裁", category: "idiom" },
    { emojis: ["🐝", "🥭", "🖊️", "🦌"], answer: "锋芒毕露", category: "idiom" },
    { emojis: ["⛑️", "🌪️", "✋", "🐔"], answer: "安分守己", category: "idiom" },
    { emojis: ["🍷", "🍷", "🐢", "1️⃣"], answer: "九九归一", category: "idiom" },
    { emojis: ["🐔", "🐶", "😇"], answer: "鸡犬升天", category: "idiom" },
    { emojis: ["🦶", "🐎", "👀", "🌹"], answer: "走马观花", category: "idiom" },
    { emojis: ["🔭", "🚢", "⚽️", "💦"], answer: "望穿秋水", category: "idiom" },
    { emojis: ["🐳", "☀️", "🕳️", "🚇"], answer: "惊天动地", category: "idiom" },
    { emojis: ["🐔", "🐻", "🔥", "🧧"], answer: "吉凶祸福", category: "idiom" },
    { emojis: ["🌟", "🍍", "♟️", "👔"], answer: "星罗棋布", category: "idiom" },
    { emojis: ["👔", "🍜", "👨‍🦰", "👩"], answer: "衣食父母", category: "idiom" },
    { emojis: ["👊", "❤️", "👊", "1️⃣"], answer: "全心全意", category: "idiom" },
    { emojis: ["🍚", "👴", "⭕️", "👶"], answer: "返老还童", category: "idiom" },
    { emojis: ["📖", "🍌", "🚪", "👶"], answer: "书香门第", category: "idiom" },
    { emojis: ["🍍", "☁️", "🚀", "🌞"], answer: "拨云见日", category: "idiom" },
    { emojis: ["🟧", "🐯", "🐢", "⛰️"], answer: "放虎归山", category: "idiom" },
    { emojis: ["🐒", "➡️", "🐒", "🌲"], answer: "分身乏术", category: "idiom" },
    { emojis: ["👂", "👀", "1️⃣", "❤️"], answer: "耳目一新", category: "idiom" },
    { emojis: ["🌊", "😭", "🪨", "💔"], answer: "海枯石烂", category: "idiom" },
    { emojis: ["🥃", "🍉", "🤞", "➕"], answer: "悲喜交加", category: "idiom" },
    { emojis: ["🎈", "👄", "8️⃣", "🐍"], answer: "七嘴八舌", category: "idiom" },
    { emojis: ["👨", "🚶", "🍵", "🥶"], answer: "人走茶凉", category: "idiom" },
    { emojis: ["❤️", "🔦", "🙅", "📣"], answer: "心照不宣", category: "idiom" },
    { emojis: ["🐔", "✈️", "🥚", "🔨"], answer: "鸡飞蛋打", category: "idiom" },
    { emojis: ["🥭", "👨", "🙌", "🐘"], answer: "盲人摸象", category: "idiom" },
    { emojis: ["🏆", "💧", "🚗", "❤️"], answer: "杯水车薪", category: "idiom" }
];

// 美食题库
export const foodBank: Riddle[] = [
    { emojis: ["🐖", "🦶", "🍚"], answer: "猪脚饭", category: "food" },
    { emojis: ["🌶️", "🐔"], answer: "辣子鸡", category: "food" },
    { emojis: ["🍋", "🍹"], answer: "柠檬茶", category: "food" },
    { emojis: ["🦞", "🌶️"], answer: "麻辣小龙虾", category: "food" },
    { emojis: ["🥚", "🥧"], answer: "蛋挞", category: "food" },
    { emojis: ["🦁", "🦁", "🦁"], answer: "狮子头", category: "food" },
    { emojis: ["🍍", "🍞"], answer: "菠萝包", category: "food" },
    { emojis: ["🍵", "🥚"], answer: "茶叶蛋", category: "food" },
    { emojis: ["⬆️", "🔥", "🦆"], answer: "北京烤鸭", category: "food" },
    { emojis: ["🍄", "🐔"], answer: "小鸡炖蘑菇", category: "food" },
    { emojis: ["🐴", "👵", "🫘", "🧧"], answer: "麻婆豆腐", category: "food" },
    { emojis: ["🏹", "💥", "🐔", "📌"], answer: "宫保鸡丁", category: "food" },
    { emojis: ["🐟", "🍌", "🍆"], answer: "鱼香茄子", category: "food" },
    { emojis: ["👴", "💃", "🧱"], answer: "佛跳墙", category: "food" },
    { emojis: ["🍖", "➕", "💆"], answer: "肉夹馍", category: "food" },
    { emojis: ["💦", "🐷", "🐟"], answer: "水煮鱼", category: "food" },
    { emojis: ["👍", "👍", "🍬"], answer: "棒棒糖", category: "food" },
    { emojis: ["🧊", "🍺"], answer: "凉皮", category: "food" },
    { emojis: ["🥕", "🧑‍🏫", "🌸"], answer: "螺狮粉", category: "food" },
    { emojis: ["✂️", "🧊", "🍎"], answer: "煎饼果子", category: "food" },
    { emojis: ["🅿️", "🅿️", "🥛"], answer: "双皮奶", category: "food" },
    { emojis: ["🔥", "🐔", "🍜"], answer: "火鸡面", category: "food" },
    { emojis: ["⚪️", "🪓", "🐔"], answer: "白斩鸡", category: "food" },
    { emojis: ["🍴", "🔥", "👛"], answer: "叉烧包", category: "food" },
    { emojis: ["🐔", "🍚", "🌹"], answer: "鸡米花", category: "food" },
    { emojis: ["🐿️", "👨", "☔️", "🍙"], answer: "松仁玉米", category: "food" },
    { emojis: ["🥶", "👵", "🚶‍♂️", "👶"], answer: "东坡肘子", category: "food" },
    { emojis: ["🐑", "🥩", "🏃", "💆"], answer: "羊肉泡馍", category: "food" },
    { emojis: ["🪡", "🐷", "🥛", "🍵"], answer: "珍珠奶茶", category: "food" },
    { emojis: ["👫", "✈️", "🎬"], answer: "夫妻肺片", category: "food" },
    { emojis: ["8️⃣", "🎗️", "🔴", "🍟"], answer: "拔丝红薯", category: "food" },
    { emojis: ["4️⃣", "🥳", "🍡"], answer: "四喜丸子", category: "food" },
    { emojis: ["💰", "🐲", "🥬"], answer: "乾隆白菜", category: "food" },
    { emojis: ["⛽️", "🚪", "🦐"], answer: "油焖大虾", category: "food" },
    { emojis: ["🆗", "😄", "🐔", "📏"], answer: "可乐鸡翅", category: "food" },
    { emojis: ["💜", "🔥", "🛢️", "🐟"], answer: "孜然鱿鱼", category: "food" },
    { emojis: ["🔴", "🔥", "🏐", "📈"], answer: "红烧排骨", category: "food" },
    { emojis: ["🌉", "🍚", "🧵"], answer: "过桥米线", category: "food" },
    { emojis: ["🐑", "🥣", "🌿", "🍚"], answer: "扬州炒饭", category: "food" },
    { emojis: ["🦷", "✍️", "🎀", "🕸️"], answer: "鸭血粉丝", category: "food" },
    { emojis: ["🐎", "👔", "⬆️", "🌲"], answer: "蚂蚁上树", category: "food" },
    { emojis: ["🔪", "🌶️", "🐟", "🎲"], answer: "剁椒鱼头", category: "food" },
];

// 时尚题库 (已移除)
/*
export const fashionBank: Riddle[] = [];
*/

// 影视题库 (placeholder - 用户会添加)
export const movieBank: Riddle[] = [
    { emojis: ["🦁", "👑", "🌍"], answer: "狮子王", category: "movie" },
    { emojis: ["❄️", "👸", "⛄"], answer: "冰雪奇缘", category: "movie" },
    { emojis: ["🕷️", "🦸", "🏙️"], answer: "蜘蛛侠", category: "movie" },
    { emojis: ["🚢", "❤️", "🌊"], answer: "泰坦尼克号", category: "movie" },
    { emojis: ["🐼", "🥋", "🐉"], answer: "功夫熊猫", category: "movie" },
    { emojis: ["🦖", "🌴", "🚙"], answer: "侏罗纪公园", category: "movie" },
    { emojis: ["🧙‍♂️", "💍", "🌋"], answer: "指环王", category: "movie" },
    { emojis: ["🚀", "🌌", "🛰️"], answer: "星际穿越", category: "movie" },
    { emojis: ["🤖", "🚗", "🔥"], answer: "变形金刚", category: "movie" },
    { emojis: ["🧑‍🚀", "🌕", "🚀"], answer: "阿波罗13号", category: "movie" },
    { emojis: ["👨‍✈️", "✈️", "🌊"], answer: "萨利机长", category: "movie" },
    { emojis: ["🦇", "🌃", "🦸"], answer: "蝙蝠侠", category: "movie" },
    { emojis: ["🧑‍🎤", "🎸", "👑"], answer: "波西米亚狂想曲", category: "movie" },
    { emojis: ["🧠", "🌀", "🎭"], answer: "盗梦空间", category: "movie" },
    { emojis: ["🚓", "💊", "🕶️"], answer: "黑客帝国", category: "movie" },
    { emojis: ["🧸", "🤠", "🚀"], answer: "玩具总动员", category: "movie" },
    { emojis: ["🐟", "🔍", "🧑‍🧒"], answer: "海底总动员", category: "movie" },
    { emojis: ["🎈", "🏠", "👴"], answer: "飞屋环游记", category: "movie" },
    { emojis: ["👑", "🐉", "⚔️"], answer: "权力的游戏", category: "movie" },
    { emojis: ["🧪", "🧑‍🏫", "💊"], answer: "绝命毒师", category: "movie" },
    { emojis: ["👨‍⚕️", "🏥", "🧠"], answer: "豪斯医生", category: "movie" },
    { emojis: ["🧟", "🌍", "🚶"], answer: "行尸走肉", category: "movie" },
    { emojis: ["🕵️‍♂️", "🧩", "🇬🇧"], answer: "神探夏洛克", category: "movie" },
    { emojis: ["💼", "🏢", "🤵"], answer: "纸牌屋", category: "movie" },
    { emojis: ["👳", "🚣", "🐯"], answer: "少年派的奇幻漂流", category: "movie" },
    { emojis: ["🐭", "🍕", "🍝"], answer: "料理鼠王", category: "movie" },
    { emojis: ["😤", "🐂"], answer: "愤怒的公牛", category: "movie" },
    { emojis: ["🤦‍♀️", "🥊", "🏃‍♀️"], answer: "热辣滚烫", category: "movie" },
    { emojis: ["🚣", "🏝️", "🏐", "🥥"], answer: "荒岛余生", category: "movie" },
    { emojis: ["👦", "👓", "⚡️", "🏰", "🐍"], answer: "哈利波特", category: "movie" },
];

// 音乐题库
export const musicBank: Riddle[] = [
    { emojis: ["🌙", "⌚️", "❤️"], answer: "月亮代表我的心", category: "music", description: "（月亮代表我的心 / 邓丽君）" },
    { emojis: ["🦋"], answer: "蝴蝶", category: "music", description: "（蝴蝶 / 陶喆）" },
    { emojis: ["☀️", "🌈", "🦄"], answer: "阳光彩虹小白马", category: "music", description: "（阳光彩虹小白马 / 大张伟）"  },
    { emojis: ["🎂", "😄"], answer: "生日快乐", category: "music" },
    { emojis: ["💔", "🌊"], answer: "伤心太平洋", category: "music" , description: "（伤心太平洋 / 任贤齐）" },
    { emojis: ["🚩", "🍐", "🐘"], answer: "七里香", category: "music" , description: "（七里香 / 周杰伦）" },
    { emojis: ["🎆", "🥶"], answer: "烟花易冷", category: "music", description: "（烟花易冷 / 周杰伦）"  },
    { emojis: ["🌟", "☀️"], answer: "星晴", category: "music", description: "（星晴 / 周杰伦）"  },
    { emojis: ["🪡", "❄️"], answer: "认真的雪", category: "music", description: "（认真的雪 / 薛之谦）"  },
    { emojis: ["🦴", "🏊", "👨"], answer: "孤勇者", category: "music", description: "（孤勇者 / 陈奕迅）"  },
    { emojis: ["🌹"], answer: "红玫瑰", category: "music", description: "（红玫瑰 / 陈奕迅）"   },
    { emojis: ["🏡", "🙅", "💜", "🧟"], answer: "乌梅子酱", category: "music" , description: "（乌梅子酱 / 李荣浩）"  },
    { emojis: ["🫧"], answer: "泡沫", category: "music", description: "（泡沫 / 邓紫棋）"   },
    { emojis: ["🌞", "🌞"], answer: "暖暖", category: "music", description: "（暖暖 / 梁静茹）" },
    { emojis: ["🍋", "🦐"], answer: "宁夏", category: "music", description: "（宁夏 / 梁静茹）" },
    { emojis: ["🫘"], answer: "红豆", category: "music", description: "（红豆 / 王菲）" },
    { emojis: ["🚢", "🚩"], answer: "传奇", category: "music" , description: "（传奇 / 李健）"},
    { emojis: ["🟢", "💡"], answer: "绿光", category: "music" , description: "（绿光 / 孙燕姿）"},
    { emojis: ["🐟", "🗡️"], answer: "遇见", category: "music", description: "（遇见 / 孙燕姿）" }, 
    { emojis: ["💫", "🌧️"], answer: "流星雨", category: "music", description: "（流星雨 / F4）" },
    { emojis: ["👩‍❤️‍👨", "🎈"], answer: "告白气球", category: "music", description: "（告白气球 / 周杰伦）" },
    { emojis: ["👂", "🌊"], answer: "听海", category: "music", description: "（听海 / 张惠妹）" },
    { emojis: ["🌞", "🙅‍♀️", "🍂"], answer: "日不落", category: "music", description: "（日不落 / 蔡依林）" },
    { emojis: ["🍬", "🍯", "🍯"], answer: "甜蜜蜜", category: "music", description: "（甜蜜蜜 / 邓丽君）" },
    { emojis: ["🌟", "🌟", "👉", "💡"], answer: "星星点灯", category: "music", description: "（星星点灯 / 郑智化）" },
    { emojis: ["🌬️", "🌾", "🌊"], answer: "风吹麦浪", category: "music", description: "（风吹麦浪 / 李健）" },
    { emojis: ["🍏", "🌸", "🦔"], answer: "青花瓷", category: "music", description: "（青花瓷 / 周杰伦）" },
    { emojis: ["🏊", "💨"], answer: "勇气", category: "music", description: "（勇气 / 梁静茹）" },
    { emojis: ["👴", "🍵"], answer: "爷爷泡的茶", category: "music", description: "（爷爷泡的茶 / 周杰伦）" },
    { emojis: ["👶", "🌸"], answer: "童话", category: "music", description: "（童话 / 光良）" },
];

// 运动题库 (已移除)
/*
export const sportsBank: Riddle[] = [];
*/

// 题库映射
export const riddleBanks: { [key: string]: Riddle[] } = {
    idiom: idiomBank,
    food: foodBank,
    // fashion: fashionBank,
    movie: movieBank,
    music: musicBank,
    // sports: sportsBank,
};

// 兼容旧代码
export const riddleBank = idiomBank;

// 获取混合题库
export function getMixedRiddles(categories: string[]): Riddle[] {
    const result: Riddle[] = [];
    for (const cat of categories) {
        if (riddleBanks[cat]) {
            result.push(...riddleBanks[cat]);
        }
    }
    return result;
}
