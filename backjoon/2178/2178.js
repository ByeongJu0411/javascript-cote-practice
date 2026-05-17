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
  const queue = [];
  let head = 0;

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (head < queue.length) {
    const [x, y, dist] = queue[head++];

    if (x === N - 1 && y === M - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 미로 범위 밖
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      // 벽
      if (maze[nx][ny] === 0) continue;
      // 이미 방문
      if (visited[nx][ny]) continue;

      // 중복 방지
      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }
}

console.log(bfs());
