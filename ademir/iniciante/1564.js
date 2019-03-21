var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
lines.pop();

for (let line of lines)
  console.log(parseInt(line) === 0 ? "vai ter copa!" : "vai ter duas!");
