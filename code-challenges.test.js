// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: fibSeq is not defined

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const fibSeq = (fibSeqLen) => {
  let newArray = []
  let x = 1
  let y = 1
  let z = null
  newArray.push(x)
  newArray.push(y)
  for (let i = 2; i < fibSeqLen; i++) {
      z = x + y
      x = y
      y = z
      newArray.push(z)
  } return newArray
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//Pseudo Code: For Above
// 1. Create a function named fibSeq.
    // 1a. Has one parameter named fibSeqLen.
// 2. Declare 4 new variables.
    // 2a. First; newArray = []; Since output is an array.
    // 2b. Second; x = 1, Third; y = 1
    // 2c. Fourth; z = null; intentional absence of a value.
    // 2d. Use built in method .push for both x and y into the newArray. This will give us the expected output for the first two elements.
// 3. Create a for loop, starting at 2, ending at our parameter -since our parameter datatype is a number-, listing one by one.
// 4. Within the for loop;
    // 4a. z = x + y; x and y are defined above outside the for loop at the start.
              // x and y will change depending on our value(s) or sum of 4b and 4c.
    // 4b. x = y; stating x = y.
              // This value will change depending on our value from 4c. 
    // 4c. y = z; stating y = z
              // This value will change depending on our sum from 4a.
    // 4d. Use .push to push the new value of z into the array.
// 5. return newArray outside of the for loop.

// Pseudo code: for below refactored from above.
// 1. Create a function named fibSeq. Has one parameter named fibSeqLen.
// 2. Declare a new variable named newArr equal to an array of [1, 1]. These Fixed values are in place for our x and y.
// 3. Create a for loop with build in methods for starting and ending for i. 
    //3a. Starting newArr.length, and ending will be our parameter.
    //3b. Execute the action of the for loop for i. 
    //3c. Attach bracket notation to newArr[i]. Have it equal a arithmetic equation. newArr[i-1] + newArr[i-2]. 
// 4.  Return newArr outside of the loop

// const fibSeq = (fibSeqLen) => {
//   let newArr = [1, 1]
//   for (let i = newArr.length; i < fibSeqLen; i++) {
//       newArr[i] = newArr[i-1] + newArr[i-2]
//   } return newArr
// }


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("leastToGreatest", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

//   ReferenceError: leastToGreatest is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const leastToGreatest = (minutes) => {
  return Object.values(minutes).sort((a, b) => a - b)
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code:
// 1. Create a function called leastToGreatest. Has one parameter called minutes.
// 2. Use static Method Object.values(minutes) with our parameter minutes. To call upon the values, not the keys of the object.
      // 2a. Attach bulit in method that takes a function as an argument, .sort that takes an argument of parameters (a,b) that minus a from b to list least to greatest.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumOf", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
// Expected output: []
    expect(sumOf(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumOf(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumOf(accountTransactions3)).toEqual([])
  })
})

// ReferenceError: sumOf is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const sumOf = (addition) => {
  let placeHolder = 0
 for(let i=0; i<addition.length;i++) {
     placeHolder = addition[i] + placeHolder
     addition[i] = placeHolder
 } return addition
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code:
// 1. Create a function called sumOf, has 1 parameter called addition.
      // 1a. Declare a new variable named placeHolder equal to 0.
// 2. Create a for loop to iterate over each index.
      // 2a. PlaceHolder is within our local scope.
      // 2b. Have placeHolder equal to our parameter with backet notation to signal index [i], arithmetic operator + to add placeHolder.
      // 2c. Have addition[i] = placeHolder, so it can iterate each index within the loop to add the last index value to the current one.
// 3. Return addition outside of the for loop.

