let numberArray = new Array();
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = (a + b) * -1;
numberArray.push(a);
numberArray.push(b);
numberArray.push(c);
console.log("Numbers: " + numberArray);
let sum = 0;
function findSum(sum, num) {
  sum += num;
  return sum;
}
numberArray.reduce(findSum, 0);
console.log("Sum: " + sum);
