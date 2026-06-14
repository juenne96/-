const output = document.getElementById("output");

// 示例汉字库（可以继续扩展）
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

// 学习模式
function startLearn() {
  output.innerHTML = `
    <h3>📚 学习模式</h3>
    <p>认识这些汉字：</p>
    <div style="font-size:24px; line-height:2;">
      ${words.join(" ")}
    </div>
  `;
}

// 游戏模式
function startGame() {
  const random = words[Math.floor(Math.random() * words.length)];

  output.innerHTML = `
    <h3>🎮 游戏模式</h3>
    <p>记住这个字：</p>
    <div style="font-size:40px; margin:10px 0;">
      ${random}
    </div>
    <button onclick="startGame()">下一个</button>
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
    <div style="font-size:40px; margin:10px 0;">${correct.split(" ")[0]}</div>
    ${options.map(opt => `
      <button onclick="checkAnswer('${opt}', '${correct}')">
        ${opt}
      </button>
    `).join("<br><br>")}
  `;
}

// 答案检查
function checkAnswer(selected, correct) {
  if (selected === correct) {
    output.innerHTML = `<h3>✅ 正确！</h3><button onclick="startTest()">再来一次</button>`;
  } else {
    output.innerHTML = `<h3>❌ 再试一次</h3><button onclick="startTest()">重试</button>`;
  }
}
