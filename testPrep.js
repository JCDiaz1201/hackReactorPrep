// FUNCTION DEFINITION(S) TEST CODE SKELETON
function addOne(val) {
  return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
  if (condition) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']');
  }
}

// TESTS FOR isOne
var result1 = addOne(1);
assert(result1 === 2, 'should return result of a positive input number added to 1');

var result2 = addOne(-2);
assert(result2 === 1, 'should return result of a negative input number added to 1');


// *********************** Assert Equal ***********************

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
      console.log('passed')
  } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

// *********************** Assert Array Equal ***********************
let testName = 'my test'
let expected = ['b', 'r', 'k', 'e', 'n'];
let actual = 'broken'.split('');

function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let sameValues = true
  
  for(let i = 0; i < expected.length; i++ ){
    if (expected[i] !== actual[i]) {
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

assertArraysEqual(actual, expected, testName)


// *********************** Assert Object Equal ***********************
let person = {
  firstName: 'Jao',
  lastName: 'Jacobs'
};

let expected = {
  firstName: 'Jack',
  lastName: 'Jacobs'
};

let testName = 'my test'

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual + '') 
  }
}

assertObjectsEqual(person, expected, testName);

// *********************** Assert Within Range ***********************

var dieRoll = 3;

function assertWithinRange(low, high, actual, testName) {
  if (actual < low || actual > high) {
    return 'FAIL [' + testName +  '] "' + actual + '" not within range ' + low + " to " + high 
  } else {
    return 'passed'
  }
}

assertWithinRange(3, 10, dieRoll, 'die roll should be between 1 and 6');


// *********************** Apply Assert Always Equal ***********************

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]))
  }
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let sameValues = true
  
  for(let i = 0; i < expected.length; i++ ){
    if (expected[i] !== actual[i]) {
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

// TESTS CASES
let testName = 'my test'

let actual = cubeAll([1, 2, 3])
let expected = [1, 8, 27]
assertArraysEqual(actual, expected, testName)

actual = cubeAll([2, 3, 4])
expected = [8, 27, 64]
assertArraysEqual(actual, expected, testName)

// *********************** Assert Obj Equal Application ***********************

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  let firstName = obj.firstName;
  let lastName = obj.lastName;

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual + '') 
  }
}

// TESTS CASES
let testName = 'my test'

let person = addFullNameProp({firstName: "Jonathan", lastName: "Diaz"})
let expected = { firstName: 'Jonathan', lastName: 'Diaz', fullName: 'Jonathan Diaz' }
assertObjectsEqual(person, expected, testName);

person = addFullNameProp({firstName: "Jonathan", lastName: "Tovar"})
expected = { firstName: 'Jonathan', lastName: 'Diaz', fullName: 'Jonathan Diaz' }
assertObjectsEqual(person, expected, testName);











