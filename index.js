const prerequisiteSubject = (data) => data.every((item) => item[0] > item[1]);

const input = [
  [1, 0],
  [0, 1],
];
console.log("input", input);
console.log("output", prerequisiteSubject(input));
