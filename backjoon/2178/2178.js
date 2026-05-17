const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const maze = [];
for (let i = 1; i <= N; i++) {
  maze.push(input[i].split("").map(Number));
}

let answer = Infinity;
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

function go(x, y, count) {
  if (x < 0 || y < 0 || x >= N || y >= M) return;
  if (maze[x][y] === 0) return;
  if (visited[x][y]) return;

  if (x === N - 1 && y === M - 1) {
    answer = Math.min(answer, count);
    return;
  }

  visited[x][y] = true;
  go(x - 1, y, count + 1);
  go(x + 1, y, count + 1);
  go(x, y - 1, count + 1);
  go(x, y + 1, count + 1);
}

go(0, 0, 1);
console.log(answer);
