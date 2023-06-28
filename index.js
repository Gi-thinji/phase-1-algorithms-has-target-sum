function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length;i++){
    for(j=i+1; j<array.length; j++){
      if(array[i]+array[j] === target) return true
    }
    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
   O(n) - Linear Time Complexity
*/

/* 
  Add your pseudocode here
  1. Write a function that takes in two arguements: an array and a target
  2. For each item of the array, add it to the other items of the array
  3. Compare the sum to the target: return true if they are the same and false otherwise
*/

/*
  Add written explanation of your solution here
  For every element of the array, the other eleemnt are added to it and compared to the target vale. It returns true if they are the same and false if otherwise.
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
