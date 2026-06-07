const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const N = parseInt(input[0]);
const M = parseInt(input[1]);

const selected = [];
const answer = [];

function dfs() {
  if (selected.length === M) {
    answer.push(selected.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (selected.includes(i)) continue;

    selected.push(i);
    dfs();
    selected.pop(); // 백트래킹 — 다음 경로를 위해 되돌리기
  }
}

dfs();
console.log(answer.join("\n"));
