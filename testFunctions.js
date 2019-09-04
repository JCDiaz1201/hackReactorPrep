// *********************** TESTING SUITE FUNCTIONS *********************** 

// *********************** ASSERT EQUAL ***********************
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed')
	} else {
		console.log('FAILED [' + testName + '] Expected "' + expected + '" but got "' + acutal + '"')
	}
}

// *********************** ASSERT ARRAYS EQUAL ***********************

function assertArraysEqual(actual, expected, testName) {
	let sameLength = actual.length === expected.length
	let sameValues = true;

	for (let j = 0; j < expected.length; j++) {
		if (expected[j] !== actual[j]) {
			sameValues = false
			break;
		}
	}

	if (sameValues && sameLength) {
		console.log('passed')
	} else {
		console.log('FAILED [' + testName + '] Expected "' + expected + '" but got "' + actual + '"')
	}
}

// *********************** ASSERT OBJECTS EQUAL ***********************

function assertObjectsEqual(actual, expected, testName){
	actual = JSON.stringify(actual)
	expected = JSON.stringify(expected)

	if (actual === expected) {
		console.log('passed')
	} else {
		console.log('FAILED [' + testName + ' Expected "' + expected + '" but got "' + actual '"')
	}
}

// *********************** ASSERT WITHIN RANGE ***********************

function assertWithinRange(actual, expected, testName) {
	if (actual < low || actual > high) {
		console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high + '');
	} else {
		console.log(passed)
	}
}































