const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a_array = input[1].split(" ").map(Number);

const m = Number(input[2]);
const b_array = input[3].split(" ").map(Number);

const a_set = new Set(a_array);

for (let j = 0; j < m; j++) {
  if (a_set.has(b_array[j])) {
    console.log("1");
  } else {
    console.log("0");
  }
}
