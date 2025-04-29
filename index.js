const code1 = 7 + 3;
console.log(code1);

const code2 = 100 / 2 - 10;
console.log(code2);

const code3 = 40 - (16 % 5);
console.log(code3);

const message = "The vault has been secured. The combination is: ";
console.log(message);

const codeA = code1 + "-" + code2 + "-" + code3;
const codeB = `${code1}-${code2}-${code3}`;
console.log(codeA);
console.log(message, codeA, codeB);
