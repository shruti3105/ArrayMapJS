let numArray = new Array();
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100;
  numArray.push(num);
}
console.log("10 randon 3 digit munbers: " + numArray);
let sortedArray = new Array();
sortedArray = numArray.slice(0).sort();
console.log("Sorted numbers: " + sortedArray);
console.log("Second largest number: " + sortedArray[numArray.length - 2]);
console.log("Second smallest number: " + sortedArray[1]);
