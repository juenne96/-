const data = [

/******** 动物 ********/
{w:"猫",p:"māo",word:"小猫",category:"动物",img:"🐱"},
{w:"狗",p:"gǒu",word:"小狗",category:"动物",img:"🐶"},
{w:"鱼",p:"yú",word:"金鱼",category:"动物",img:"🐟"},
{w:"鸟",p:"niǎo",word:"小鸟",category:"动物",img:"🐦"},
{w:"牛",p:"niú",word:"奶牛",category:"动物",img:"🐄"},
{w:"羊",p:"yáng",word:"山羊",category:"动物",img:"🐐"},
{w:"马",p:"mǎ",word:"小马",category:"动物",img:"🐴"},
{w:"鸡",p:"jī",word:"母鸡",category:"动物",img:"🐔"},
{w:"鸭",p:"yā",word:"鸭子",category:"动物",img:"🦆"},
{w:"兔",p:"tù",word:"兔子",category:"动物",img:"🐰"},

/******** 水果 ********/
{w:"苹",p:"píng",word:"苹果",category:"水果",img:"🍎"},
{w:"果",p:"guǒ",word:"水果",category:"水果",img:"🍎"},
{w:"香",p:"xiāng",word:"香蕉",category:"水果",img:"🍌"},
{w:"蕉",p:"jiāo",word:"香蕉",category:"水果",img:"🍌"},
{w:"西",p:"xī",word:"西瓜",category:"水果",img:"🍉"},
{w:"瓜",p:"guā",word:"西瓜",category:"水果",img:"🍉"},
{w:"葡",p:"pú",word:"葡萄",category:"水果",img:"🍇"},
{w:"萄",p:"táo",word:"葡萄",category:"水果",img:"🍇"},
{w:"橙",p:"chéng",word:"橙子",category:"水果",img:"🍊"},
{w:"桃",p:"táo",word:"桃子",category:"水果",img:"🍑"},

/******** 身体 ********/
{w:"头",p:"tóu",word:"头发",category:"身体",img:"🙂"},
{w:"眼",p:"yǎn",word:"眼睛",category:"身体",img:"👀"},
{w:"耳",p:"ěr",word:"耳朵",category:"身体",img:"👂"},
{w:"口",p:"kǒu",word:"嘴巴",category:"身体",img:"👄"},
{w:"鼻",p:"bí",word:"鼻子",category:"身体",img:"👃"},
{w:"手",p:"shǒu",word:"小手",category:"身体",img:"✋"},
{w:"脚",p:"jiǎo",word:"脚丫",category:"身体",img:"🦶"},
{w:"牙",p:"yá",word:"牙齿",category:"身体",img:"😁"},
{w:"脸",p:"liǎn",word:"脸蛋",category:"身体",img:"😊"},
{w:"发",p:"fà",word:"头发",category:"身体",img:"👦"},

/******** 颜色 ********/
{w:"红",p:"hóng",word:"红色",category:"颜色",img:"🔴"},
{w:"黄",p:"huáng",word:"黄色",category:"颜色",img:"🟡"},
{w:"蓝",p:"lán",word:"蓝色",category:"颜色",img:"🔵"},
{w:"绿",p:"lǜ",word:"绿色",category:"颜色",img:"🟢"},
{w:"白",p:"bái",word:"白色",category:"颜色",img:"⚪"},
{w:"黑",p:"hēi",word:"黑色",category:"颜色",img:"⚫"},
{w:"紫",p:"zǐ",word:"紫色",category:"颜色",img:"🟣"},
{w:"粉",p:"fěn",word:"粉色",category:"颜色",img:"🌸"},
{w:"灰",p:"huī",word:"灰色",category:"颜色",img:"⬜"},
{w:"橙",p:"chéng",word:"橙色",category:"颜色",img:"🟠"},

/******** 家庭 ********/
{w:"爸",p:"bà",word:"爸爸",category:"家庭",img:"👨"},
{w:"妈",p:"mā",word:"妈妈",category:"家庭",img:"👩"},
{w:"哥",p:"gē",word:"哥哥",category:"家庭",img:"👦"},
{w:"姐",p:"jiě",word:"姐姐",category:"家庭",img:"👧"},
{w:"弟",p:"dì",word:"弟弟",category:"家庭",img:"👦"},
{w:"妹",p:"mèi",word:"妹妹",category:"家庭",img:"👧"},
{w:"爷",p:"yé",word:"爷爷",category:"家庭",img:"👴"},
{w:"奶",p:"nǎi",word:"奶奶",category:"家庭",img:"👵"},
{w:"家",p:"jiā",word:"家庭",category:"家庭",img:"🏠"},
{w:"人",p:"rén",word:"家人",category:"家庭",img:"👨‍👩‍👧‍👦"},

/******** 交通工具 ********/
{w:"车",p:"chē",word:"汽车",category:"交通工具",img:"🚗"},
{w:"船",p:"chuán",word:"小船",category:"交通工具",img:"🚢"},
{w:"机",p:"jī",word:"飞机",category:"交通工具",img:"✈️"},
{w:"飞",p:"fēi",word:"飞机",category:"交通工具",img:"✈️"},
{w:"火",p:"huǒ",word:"火车",category:"交通工具",img:"🚂"},
{w:"路",p:"lù",word:"马路",category:"交通工具",img:"🛣️"},
{w:"巴",p:"bā",word:"巴士",category:"交通工具",img:"🚌"},
{w:"士",p:"shì",word:"巴士",category:"交通工具",img:"🚌"},
{w:"轮",p:"lún",word:"车轮",category:"交通工具",img:"🛞"},
{w:"站",p:"zhàn",word:"车站",category:"交通工具",img:"🚏"},

/******** 数字 ********/
{w:"一",p:"yī",word:"一个",category:"数字",img:"1️⃣"},
{w:"二",p:"èr",word:"两个",category:"数字",img:"2️⃣"},
{w:"三",p:"sān",word:"三个",category:"数字",img:"3️⃣"},
{w:"四",p:"sì",word:"四个",category:"数字",img:"4️⃣"},
{w:"五",p:"wǔ",word:"五个",category:"数字",img:"5️⃣"},
{w:"六",p:"liù",word:"六个",category:"数字",img:"6️⃣"},
{w:"七",p:"qī",word:"七个",category:"数字",img:"7️⃣"},
{w:"八",p:"bā",word:"八个",category:"数字",img:"8️⃣"},
{w:"九",p:"jiǔ",word:"九个",category:"数字",img:"9️⃣"},
{w:"十",p:"shí",word:"十个",category:"数字",img:"🔟"},

/******** 日常用品 ********/
{w:"书",p:"shū",word:"书本",category:"用品",img:"📚"},
{w:"笔",p:"bǐ",word:"铅笔",category:"用品",img:"✏️"},
{w:"桌",p:"zhuō",word:"桌子",category:"用品",img:"🪑"},
{w:"椅",p:"yǐ",word:"椅子",category:"用品",img:"🪑"},
{w:"门",p:"mén",word:"大门",category:"用品",img:"🚪"},
{w:"窗",p:"chuāng",word:"窗户",category:"用品",img:"🪟"},
{w:"灯",p:"dēng",word:"电灯",category:"用品",img:"💡"},
{w:"杯",p:"bēi",word:"杯子",category:"用品",img:"🥛"},
{w:"球",p:"qiú",word:"皮球",category:"用品",img:"⚽"},
{w:"伞",p:"sǎn",word:"雨伞",category:"用品",img:"☂️"},

/******** 自然 ********/
{w:"天",p:"tiān",word:"天空",category:"自然",img:"☁️"},
{w:"日",p:"rì",word:"太阳",category:"自然",img:"☀️"},
{w:"月",p:"yuè",word:"月亮",category:"自然",img:"🌙"},
{w:"星",p:"xīng",word:"星星",category:"自然",img:"⭐"},
{w:"云",p:"yún",word:"白云",category:"自然",img:"☁️"},
{w:"雨",p:"yǔ",word:"下雨",category:"自然",img:"🌧️"},
{w:"山",p:"shān",word:"高山",category:"自然",img:"⛰️"},
{w:"水",p:"shuǐ",word:"河水",category:"自然",img:"💧"},
{w:"花",p:"huā",word:"花朵",category:"自然",img:"🌸"},
{w:"树",p:"shù",word:"大树",category:"自然",img:"🌳"}

];
