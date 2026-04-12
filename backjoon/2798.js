const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => lines.push(line.trim()));
rl.on("close", () => {
  const [n, m] = lines[0].split(" ").map(Number);
  const cards = lines[1].split(" ").map(Number);

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        const total = cards[i] + cards[j] + cards[k];
        if (total <= m) {
          result = Math.max(result, total);
        }
      }
    }
  }

  console.log(result);
});
