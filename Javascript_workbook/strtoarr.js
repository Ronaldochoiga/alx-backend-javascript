// This code creates array from a normal string using string.prototype.spli()

const array1 = "Instructions, Kindly, offices" .split(", ");
console.log(array1.length);
console.log(array1[2]);

const start = array1.indexOf("Kindly");
const deleteCount = 1;
const removedItems = array1.splice(start, deleteCount);
console.log(array1);
console.log(removedItems);
