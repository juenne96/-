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

let score = 0;

// 🔊 语音朗读
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

// 🎵 音效
function playSound(type) {
  const audio = new Audio();

  if (type === "correct") {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg";
  } else {
    audio.src = "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg";
  }

  audio.play();
}

// 📚 学习模式
function startLearn() {
  output.innerHTML = `
    <h3>📚 学习模式</h3>
    <p>点击朗读汉字：</p>

    ${words.map(w => `
      <div style="margin:8px 0; font-size:20px;">
        ${w}
        <button onclick="speak('${w.split(' ')[0]}')">🔊 朗读</button>
      </div>
    `).join("")}

    <p>⭐ 分数：${score}</p>
  `;
}

// 🎮 游戏模式（自动范读）
function startGame() {
  const random = words[Math.floor(Math.random() * words.length)];
  const char = random.split(" ")[0];

  speak(char);

  output.innerHTML = `
    <h3>🎮 游戏模式</h3>

    <p>听这个字：</p>

    <div style="font-size:40px; animation: pop 0.4s;">
      ${random}
    </div>

    <button onclick="speak('${char}')">🔊 再听一次</button>
    <button onclick="startGame()">下一个</button>

    <p>⭐ 分数：${score}</p>
  `;
}

// 🧠 测试模式
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

  const char = correct.split(" ")[0];

  output.innerHTML = `
    <h3>🧠 测试模式</h3>

    <div style="font-size:40px; animation: pop 0.4s;">
      ${char}
    </div>

    <button onclick="speak('${char}')">🔊 听发音</button>

    ${options.map(opt => `
      <button onclick="checkAnswer('${opt}', '${correct}')">
        ${opt}
      </button>
    `).join("<br>")}

    <p>⭐ 分数：${score}</p>
  `;
}

// ✅ 答案检查
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score += 10;
    playSound("correct");
    output.innerHTML = `<h3>✅ 正确 +10分</h3><button onclick="startTest()">继续</button>`;
  } else {
    score -= 5;
    playSound("wrong");
    output.innerHTML = `<h3>❌ 错误 -5分</h3><button onclick="startTest()">重试</button>`;
  }
}
