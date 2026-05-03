const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lectures = input[1].split(" ").map(Number);

function countBluray(size) {
  let count = 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (sum + lectures[i] > size) {
      count++;
      sum = lectures[i];
    } else {
      sum += lectures[i];
    }
  }
  return count;
}

let left = 1;
let right = lectures.reduce((a, b) => a + b, 0);
let result = right;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (countBluray(mid) <= m) {
    result = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(result);
