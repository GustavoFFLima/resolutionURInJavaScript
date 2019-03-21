var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

lines.forEach((line, index) => {
  if (line == 0) return;
  let output = "";
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= line; j++) {
      output += `${j > i ? Math.abs(j - i + 1) : Math.abs(i - j + 1)}`.padStart(
        4
      );
    }
    console.log(output.slice(1));
    output = "";
  }

  console.log();
});
