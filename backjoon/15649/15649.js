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
  }
}

dfs();
console.log(answer.join("\n"));
