const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = [];
for (let i = 1; i <= N; i++) {
  maze.push(input[i].split("").map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    // 꺼낼 때 방문 처리와 중복 체크
    if (visited[x][y]) continue;
    visited[x][y] = true;

    if (x === N - 1 && y === M - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (maze[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;

      queue.push([nx, ny, dist + 1]); // visited 처리는 꺼낼 때만
    }
  }
}

console.log(bfs());
