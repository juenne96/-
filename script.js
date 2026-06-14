// ⭐ 星星系统
let score = localStorage.getItem("score") || 0;
document.getElementById("score").innerText = score;

// 📚 汉字资料
const data = [
    {
        w: "猫",
        p: "māo",
        word: "小猫",
        img: "https://cdn-icons-png.flaticon.com/512/616/616430.png"
    },
    {
        w: "狗",
        p: "gǒu",
        word: "小狗",
        img: "https://cdn-icons-png.flaticon.com/512/616/616408.png"
    },
    {
        w: "鱼",
        p: "yú",
        word: "金鱼",
        img: "https://cdn-icons-png.flaticon.com/512/616/616547.png"
    },
    {
        w: "鸟",
        p: "niǎo",
        word: "小鸟",
        img: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
    },
    {
        w: "牛",
        p: "niú",
        word: "奶牛",
        img: "https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
    }
];

// 当前学习汉字索引
let i = 0;

// 页面切换
function show(page) {
    document.querySelectorAll(".page").forEach(x => {
        x.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");
}

// 打开学习页面
function openLearn() {
    show("learn");
    loadLearn();
}

// 载入学习内容
function loadLearn() {
    document.getElementById("char").innerText = data[i].w;
    document.getElementById("pinyin").innerText = data[i].p;
    document.getElementById("wordText").innerText = data[i].word;
    document.getElementById("img").src = data[i].img;
}

// 范读
function fandou() {
    let msg = new SpeechSynthesisUtterance(
        "请跟我读 " + data[i].w
    );

    msg.lang = "zh-CN";
    speechSynthesis.speak(msg);
}

// 朗读
function langdu() {
    let msg = new SpeechSynthesisUtterance(data[i].w);

    msg.lang = "zh-CN";
    speechSynthesis.speak(msg);
}

// 跟读（暂时版）
function gendu() {
    alert("🎤 跟读功能开发中，请先使用范读和朗读。");
}

// 下一个汉字
function nextWord() {
    i++;

    if (i >= data.length) {
        i = 0;
    }

    loadLearn();

    document.getElementById("stroke").innerHTML = "";
}

// HanziWriter
let writer;

// 播放笔顺
function writeAnim() {
    document.getElementById("stroke").innerHTML = "";

    writer = HanziWriter.create(
        "stroke",
        data[i].w,
        {
            width: 220,
            height: 220,
            padding: 5,
            showOutline: true,
            showCharacter: false,
            strokeColor: "#ff6666",
            outlineColor: "#cccccc",
            delayBetweenStrokes: 500,
            strokeAnimationSpeed: 1
        }
    );

    writer.animateCharacter();
}

// 跟着写
function practiceWrite() {
    document.getElementById("stroke").innerHTML = "";

    writer = HanziWriter.create(
        "stroke",
        data[i].w,
        {
            width: 220,
            height: 220,
            showOutline: true,
            showCharacter: false,
            strokeColor: "#ff6666"
        }
    );

    writer.quiz();
}

// 看图选词
function loadGame1() {
    let q = data[Math.floor(Math.random() * data.length)];

    document.getElementById("gimg").src = q.img;

    let options = [q.w, "树", "车", "苹果"];

    // 随机排序
    options.sort(() => Math.random() - 0.5);

    let html = "";

    options.forEach(o => {
        html += `<button onclick="checkGame1('${o}','${q.w}')">${o}</button>`;
    });

    document.getElementById("gopt").innerHTML = html;
}

// 检查答案
function checkGame1(answer, correct) {
    if (answer === correct) {
        alert("✔️ 正确");
        addStar();
    } else {
        alert("❌ 再试试看");
    }

    loadGame1();
}

// 听读选词
let audioWord = "";

// 播放声音
function playAudio() {
    audioWord = data[
        Math.floor(Math.random() * data.length)
    ].w;

    let msg = new SpeechSynthesisUtterance(audioWord);

    msg.lang = "zh-CN";
    speechSynthesis.speak(msg);

    let html = "";

    data.forEach(x => {
        html += `<button onclick="checkAudio('${x.w}')">${x.w}</button>`;
    });

    document.getElementById("aopt").innerHTML = html;
}

// 检查听读答案
function checkAudio(answer) {
    if (answer === audioWord) {
        alert("✔️ 正确");
        addStar();
    } else {
        alert("❌ 再试一次");
    }
}

// 增加星星
function addStar() {
    score++;

    localStorage.setItem("score", score);

    document.getElementById("score").innerText = score;
}

// 初始化
loadLearn();
loadGame1();
