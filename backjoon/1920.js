const a = Math.floor(Math.random() * 100000 + 1);
const a_array = [];
for (const i = 0; i < a; i++) {
  a_array[i] = Math.floor(Math.random() * 100000 + 1);
}

const b = Math.floor(Math.random() * 100000 + 1);
const b_array = [];
for (const j = 0; j < b; j++) {
  b_array[j] = Math.floor(Math.random() * 100000 + 1);
}

for (const j = 0; j < b; j++) {
  for (i = 0; i < a_array.length; i++) {
    if (b_array[j] == a_array[i]) {
      console.log("1");
      break;
    } else {
      console.log("0");
    }
  }
}
