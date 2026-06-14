const output = document.getElementById("output");

const words = [
  "日 ☀️",
  "月 🌙",
  "山 ⛰️",
  "水 💧",
  "火 🔥",
  "木 🌳",
  "人 👤",
  "口 👄",
  "手 ✋",
  "心 ❤️"
];

// ⭐ 分数系统
let score = 0;

// 🎵 音效（用浏览器内置音效）
function playSound(type) {
  const audio = new Audio();

  if (type === "correct") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg";
  } else {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg";
  }

  audio.play();
}

// ✨ 动画提示
function animateResult(text, color) {
  output.innerHTML = `
    <div style="
      font-size:28px;
      padding:20px;
      color:${color};
      animation: pop 0.4s ease;
    ">
      ${text}
    </div>
    <button onclick="startTest()">继续</button>
  `;
}

// 学习模式
function startLearn() {
  output.innerHTML = `
    <h3>📚 学习模式</h3>
    <p>认识这些汉字：</p>
    <div style="font-size:24px; line-height:2;">
      ${words.join(" ")}
    </div>
    <p>⭐ 当前分数：${score}</p>
  `;
}

// 游戏模式
function startGame() {
  const random = words[Math.floor(Math.random() * words.length)];

  output.innerHTML = `
    <h3>🎮 游戏模式</h3>
    <p>记住这个字：</p>
    <div style="font-size:40px; margin:10px 0; animation: pop 0.4s;">
      ${random}
    </div>
    <button onclick="startGame()">下一个</button>
    <p>⭐ 分数：${score}</p>
  `;
}

// 测试模式
function startTest() {
  const answerIndex = Math.floor(Math.random() * words.length);
  const correct = words[answerIndex];

  let options = [];

  while (options.length < 3) {
    let rand = words[Math.floor(Math.random() * words.length)];
    if (!options.includes(rand)) options.push(rand);
  }

  if (!options.includes(correct)) {
    options[Math.floor(Math.random() * 3)] = correct;
  }

  output.innerHTML = `
    <h3>🧠 测试模式</h3>
    <p>请选择正确的字：</p>

    <div style="font-size:40px; margin:10px 0; animation: pop 0.4s;">
      ${correct.split(" ")[0]}
    </div>

    ${options.map(opt => `
      <button onclick="checkAnswer('${opt}', '${correct}')">
        ${opt}
      </button>
    `).join("<br><br>")}

    <p>⭐ 分数：${score}</p>
  `;
}

// 答案检查（升级）
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score += 10;
    playSound("correct");
    animateResult("✅ 正确 +10分！", "green");
  } else {
    score -= 5;
    playSound("wrong");
    animateResult("❌ 错误 -5分", "red");
  }
}
