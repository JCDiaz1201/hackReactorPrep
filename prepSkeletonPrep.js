// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  let averageLength = sum(numbers) / numbers.length
  return averageLength
}

function sum(numbers) {
  let sumTotal = 0
  numbers.forEach(function(element) {
    sumTotal = sumTotal + element
  })
  return sumTotal
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  if ( actual === expected ) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// TESTS CASES
let actual;
let expected;


actual = average([4, 4])
expected = 4
assertObjectsEqual(actual, expected, 'should not add fullName property when lastName is undefined');

actual = average([16, 84, 92])
expected = 64
assertObjectsEqual(actual, expected, 'should not add fullName property when lastName is undefined');



// ******************************* FUNCTION DEFINITION(S) *******************************

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];


// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
let newClassList = []

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let newObject = {name:"", age:""}
  classList.forEach(function(item) {
    newObject.name = item;
    newObject.age = getRandomIntInclusive(10, 11)
    newClassList.push(newObject)
    newObject = {}
  })
  return newClassList
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  if ( actual === expected ) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

function assertWithinRange(low, high, actual, testName) {
  if (actual < low || actual > high) {
    console.log('FAIL [' + testName +  '] "' + actual + '" not within range ' + low + " to " + high)
  } else {
    console.log('passed')
  }
}

// TESTS CASES

function runTestSuite() {
  let actual;
  let expected;

  decorateClassListWithAges(classList)
  actual = JSON.stringify(newClassList[0])
  expected = JSON.stringify({ name: 'Joe', age: getRandomIntInclusive(10, 11) })
  assertWithinRange(10, 11, newClassList[0].age, 'age range test')
  assertObjectsEqual(actual, expected, 'should not add fullName property when lastName is undefined');
}

runTestSuite()
//console.log(newClassList)



//  ******************************* Interpret A Skeleton *******************************

// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  let splitWord = new Set(word.split(""))
  let letterCountObject = {letter: "", count: 0}
  let lettersArray = []
  let highestCountLetter = {letter: "", count: 0}
  
  // Count the instances of each letter
  splitWord.forEach(function(letter) {
    letterCountObject.letter = letter
    letterCountObject.count = 0
    lettersArray.push(letterCountObject)
    letterCountObject = {letter: "", count: 0}
  });
  
  if (lettersArray.length === word.length) {
    //console.log(`"${word}" has no duplicate letters`)
    //return `"${word}" has no duplicate letters`
    return 0
  }
  
  lettersArray.forEach(function(obj) {
    word.split("").forEach(function(letter){
      if (obj.letter === letter) {
        obj.count = obj.count + 1
      }
    })
  })
  //console.log(lettersArray)
  
  // Iterate all the counts and find the highest
  for (let prop in lettersArray){
    if (lettersArray[prop].count > highestCountLetter.count) {
       highestCountLetter = lettersArray[prop]
    }
  }
  return highestCountLetter
  // Return this word's max repeat count
}

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  text = text.toLowerCase()
  text = text.split(" ")
  // For each word...
  text.forEach(function(word) {
    let repeatCountForWord = findMaxRepeatCountInWord(word)
    //console.log(repeatCountForWord)
    //console.log(repeatCountForWord.count)
    if (maxRepeatCountOverall < repeatCountForWord.count) {
      maxRepeatCountOverall = repeatCountForWord.count;
      wordWithMaxRepeatCount = repeatCountForWord.letter;
    }
  })
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  if ( actual === expected ) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// TESTS CASES
let actual = findFirstWordWithMostRepeatedChars("Hello world this is an assertion of the facts Arkansas")
let expected = 'a'
assertObjectsEqual(actual, expected, "It finds the highest count letter")

actual = findFirstWordWithMostRepeatedChars("A Better man could not be found")
expected = 'e'
assertObjectsEqual(actual, expected, "It finds the highest count letter")
//findFirstWordWithMostRepeatedChars("Hello world")


//  ******************************* Find Longest Palindrome *******************************

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  let palindromeList = []
  // split sentence into words
  sentence = sentence.split(" ")
  // iterate words and collect the palindromes
  sentence.forEach(function(word) {
    palindromeList.push(isPalindrome())
  })
  let filteredPlaindromeList = palindromeList.filter(Boolean)
  // sort the list of palindromes by word length
  if ( filteredPlaindromeList.length === 0 ) {
    return false
  } else {
    filteredPlaindromeList.sort(sortAscendingByLength)
    // return the largest item in the sorted list
    return filteredPlaindromeList.pop()
  }

}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (reverseString(word) === word) {
    return word
  } else {
    return null
  }
}

function reverseString(string) {
  let reversedWord = []
  for (let j = 0; j < string.length; j++){
    reversedWord.unshift(string[j])
  }
  return reversedWord.join("") 
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName){
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// TESTS CASES
let actual = findLongestPalindrome("Magam road toad civic anna repaper sagas")
let expected = 'repaper'
assertObjectsEqual(actual, expected, 'Returns the correct palindrome list')

actual = findLongestPalindrome("And Better man could not be found")
expected = false
assertObjectsEqual(actual, expected, 'Returns the correct palindrome list')









