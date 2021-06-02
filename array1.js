let numArray = new Array();
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100;
  numArray.push(num);
}
console.log("10 randon 3 digit munbers: " + numArray);
let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for (let element of numArray) {
  maxNum = Math.max(element, maxNum);
  minNum = Math.min(element, minNum);
}
for (let element of numArray) {
  max2 = element < maxNum && element > max2 ? element : max2;
  min2 = element > minNum && element < min2 ? element : min2;
}
console.log("Second largest number: " + max2);
console.log("Second smallest number: " + min2);
