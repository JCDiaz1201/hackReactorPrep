// ************************** BIG FLIPPER **************************
// Function Definitions 
function flipEveryNChars(input, increment){
  // it will take the array and increment by every 5 indexes and split based on that
  input = input.split("")

  for (let j = 0; j < input.length; j++) {
    let workArray = []
    for (let i = 0; i < increment; i++) {
      let elementToTake = input.shift()
      workArray.push(elementToTake);
    }
    workArray.reverse()
    workArray = workArray.join('')
    input.push(workArray)
  }
  // those 5 indexes will then be indexed through and swaped accordingly
  // once all 5 index slots are cycled through they will be rejoined in a new array and returned
  input = input.join('')
  console.log(input)
  return input
}

// Assertions to be used
function assertEquals(actual, expected, testName) {
  if (actual === expected){
    console.log('passed!')
  } else {
    console.log('FAILED, [' + testName + '], expected "' + expected + '" but got "' + actual + '"')
  }
}

// Test cases
let input = 'a short example';
let actual = flipEveryNChars(input, 5);
let expected = 'ohs axe trelpma'
assertEquals(actual, expected, "It flips strings in the incements specified")


// ************************** OUTLIERS **************************
// Function Definitions
function detectOutlierValues(input){
  // take input string and split it into an array
  // test each index for odd or even, splitting into two different array
  // which ever array has a length of 1 is the array to return
  // take index of from said number

  input = input.split(" ")
  let evenArray = []
  let oddArray = []
  
  for (let j = 0; j < input.length; j++){
    if ((Number(input[j]) % 2) === 0){
      evenArray.push(input[j])
    } else {
      oddArray.push(input[j])
    }
  }
  
  if (evenArray.length === 1) {
    return input.indexOf(evenArray[0]) + 1
  } else {
    return input.indexOf(oddArray[0]) + 1
  }
}

// Assertions
function assertEquals(actual, expected, testName){
  if (actual === expected){
    console.log('passed')
  } else {
    console.log('FAILED, [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// Test cases
let actual = detectOutlierValues("2 4 7 8 10")
let expected = 3
assertEquals(actual, expected, 'It renders the sole even number or the sole odd number')

actual = detectOutlierValues("1 10 1 1")
expected = 2
assertEquals(actual, expected, 'It renders the sole even number or the sole odd number')


// ************************** FIND THE PAIR **************************
// Function Definitions
function findPairForSum(input, targetSum) {
  // iterate through array and remove numbers that are greater than target sum
  // iterate through remaining indexes adding each one to the next to see if sumtarget is met
    // if iterated number does not work with any other value remove said number and continue
    // once a pair is found push results to finalArray and return iterate

let finalArray = []

  for (let a = 0; a < input.length; a++){
    if(input[a] >= targetSum) {
      input.splice(a, 1)
    }
  }

  for (let b = 0; b < input.length; b++) {
    let reference = input[b]

    if (finalArray.length < 2) {

      for (let c = 1; c < input.length; c++){
        
        if ((reference + input[c]) === targetSum) {
          finalArray.push(reference)
          finalArray.push(input[c])
        }
      }
    }
  }
  return finalArray
}

// Assertion Definitions =
function assertArraysEqual(actual, expected, testName){
  let sameLength = actual.length === expected.length
  let sameValues = true

  for (let i = 0; i < expected.length; i++){
    if (expected[i] !== actual[i]){
      sameValues = false;
      break;
    }
  }

  if (sameLength && sameValues) {
      console.log('passed')
  } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

// Test Cases
let actual = findPairForSum([3, 34, 4, 12, 5, 2], 9);
let expected = [4, 5]
assertArraysEqual(actual, expected, 'It returns the correct pair of values')


// ************************** ROTATE THIS **************************
// Function Definitions
function rotationFinder(input, wordTofind){
  // Make a duplicate of the input
  // join the original input and the duplicate together
  // see if the string that is rotated is within the newly joined input dup string
  // return true or false

  let inputDup = input.slice(0, 11)
  input = input + inputDup

  if (input.includes(wordTofind)) {
    return true
  } else {
    return false
  }
}

// Function Assertions
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
      console.log('passed')
  } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

// Test Cases
let actual = rotationFinder('orldhello w', 'hello world');
let expected = true
assertEqual(actual, expected, 'It finds the string that may be rotated')

actual = rotationFinder('orldllo w', 'hello world');
expected = false
assertEqual(actual, expected, 'It finds the string that may be rotated')




