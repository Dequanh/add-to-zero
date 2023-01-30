// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let sum = false;
for (let i = 0; i < array.length; i++) {
  for (let z = 0; z < array.length; z++) {
    if (i !== z) {
      if (array[i] + array[z] === 0) {
        sum = true;
      } 
    }
  }
}

console.log(sum)