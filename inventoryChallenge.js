//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON HR WEBSITE ******************************
let actual
let expected

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(inventory){
  // should iterate through each name in array
  let renderedInventory = []
  for (x = 0; x < inventory.length; x++){
    for (i = 0; i < inventory[x].shoes.length; i++) {
      renderedInventory.push(inventory[x].name + ', ' 
                  + inventory[x].shoes[i].name + ', ' 
                  + inventory[x].shoes[i].price + '\n'
      )
    }
  }
  return renderedInventory.join(" ")
}

function calculateAveragePricePerDesigner(inventory) {
  let averagePricePerDesignerObject = {'designers': []}
  let totalShoeCost = 0
  let averageShoeCost = 0

  for (let x = 0; x < inventory.length; x ++){
    for (let i = 0; i < inventory[x].shoes.length; i++){
      totalShoeCost = totalShoeCost + inventory[x].shoes[i].price
    }
    averageShoeCost = totalShoeCost / inventory[x].shoes.length
    averagePricePerDesignerObject.designers.push({name: inventory[x].name, averagePrice: averageShoeCost})
    totalShoeCost = 0
    averageShoeCost = 0
  }

  return averagePricePerDesignerObject
}

function listAllBlackShoes(inventory) {
  let renderedInventory = renderInventory(inventory).split('\n');
  let filteredArray = []

  for (let x = 0; x < renderedInventory.length; x++){
    if (renderedInventory[x].includes('black')) {
      filteredArray.push(renderedInventory[x] + "\n");
    }
  }
  return filteredArray.join('')
}

function listAllLaceShoes(inventory) {
  let renderedInventory = renderInventory(inventory).split('\n');
  let filteredArray = []

  for (let x = 0; x < renderedInventory.length; x++){
    if (renderedInventory[x].includes('lace')) {
      filteredArray.push(renderedInventory[x] + "\n");
    }
  }
  return filteredArray.join('')
}

function listLaceAndLaceIndex(inventory){
  let brokenDownArray = (breakDownMainArray(inventory))
  let reducedArray = breakDownSubWordArray(brokenDownArray)
  let findWordIndexVar = findWordIndex(reducedArray)
  return findWordIndexVar
}

function breakDownMainArray(inventory){
  let wordsForWork = []
  let renderFilteredLaceArray = listAllLaceShoes(inventory).split(', ')

  for (let x = 0; x < renderFilteredLaceArray.length; x++){
    if (renderFilteredLaceArray[x].includes('lace')) {
      wordsForWork.push(renderFilteredLaceArray[x])
    }
  }
  return wordsForWork
}

function breakDownSubWordArray(words){
  let finalOutput = []
  let wordObject = {nameWords: [], targetWordIndex: 0}

  for (let j = 0; j < words.length; j++) {
    splitWords = words[j].split(" ")
    for (let k = 0; k < splitWords.length; k++){
      wordObject.nameWords.push(splitWords[k])
    }
    finalOutput.push(wordObject)
    wordObject = {nameWords: [], targetWordIndex: 0}
  }
  return finalOutput
}

function findWordIndex(wordsObjectArray){
  for (let x = 0; x < wordsObjectArray.length; x++) {
    let findIndexArray = wordsObjectArray[x].nameWords

    function findLaceWordIndex(element){
      return element.includes('lace')
    }
    wordsObjectArray[x].targetWordIndex = findIndexArray.findIndex(findLaceWordIndex)
  }
  return wordsObjectArray
}


// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName){
  let samelength = actual.length === expected.length
  let sameValues = true

  for(let j = 0; j < expected.length; j++){
    if (expected[j] !== actual[j]) {
      sameValues = false;
      break;
    }
  }

  if (samelength && sameValues) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

function assertEqual(actual, expected, testName){
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '" Expected "' + expected + '\n", but got "' + actual + '"')
  }
}

// TESTS CASES
//****************************** PART A TEST ******************************
// actual = renderInventory(currentInventory)
// expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\n Brunello Cucinelli, tasselled green low-top lace-up, 1100\n Brunello Cucinelli, plain beige suede moccasin, 950\n Brunello Cucinelli, plain olive suede moccasin, 1050\n Gucci, red leather laced sneakers, 800\n Gucci, black leather laced sneakers, 900\n'
// assertEqual(actual, expected, "It should render a flat list of inventory")

//****************************** PART B TEST ******************************
// expected = {
//  'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// actual = calculateAveragePricePerDesigner(currentInventory)
// assertEqual(actual, expected, "It returns the average price per designer")

//****************************** PART C TEST ******************************
// actual = listAllBlackShoes(currentInventory)
// expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\n Gucci, black leather laced sneakers, 900\n'
// assertEqual(actual, expected, "It returns filtered content")


//****************************** PART D TEST ******************************
actual = listLaceAndLaceIndex(currentInventory)
expected = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
assertEqual(actual, expected, "It returns annoyingly filtered content")


//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
//****************************** THIS IS WHAT WORKS ON REPL WEBSITE ******************************
let actual
let expected

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(inventory){
  // should iterate through each name in array
  let renderedInventory = []
  for (x = 0; x < inventory.length; x++){
    for (i = 0; i < inventory[x].shoes.length; i++) {
      renderedInventory.push(inventory[x].name + ', ' 
                  + inventory[x].shoes[i].name + ', ' 
                  + inventory[x].shoes[i].price + '\n'
      )
    }
  }
  return renderedInventory.join(" ")
}

function calculateAveragePricePerDesigner(inventory) {
  let averagePricePerDesignerObject = {'designers': []}
  let totalShoeCost = 0
  let averageShoeCost = 0

  for (let x = 0; x < inventory.length; x ++){
    for (let i = 0; i < inventory[x].shoes.length; i++){
      totalShoeCost = totalShoeCost + inventory[x].shoes[i].price
    }
    averageShoeCost = totalShoeCost / inventory[x].shoes.length
    averagePricePerDesignerObject.designers.push({name: inventory[x].name, averagePrice: averageShoeCost})
    totalShoeCost = 0
    averageShoeCost = 0
  }

  return JSON.stringify(averagePricePerDesignerObject)
}

function listAllBlackShoes(inventory) {
  let renderedInventory = renderInventory(inventory).split('\n');
  let filteredArray = []

  for (let x = 0; x < renderedInventory.length; x++){
    if (renderedInventory[x].includes('black')) {
      filteredArray.push(renderedInventory[x] + "\n");
    }
  }
  return filteredArray.join('')
}

function listAllLaceShoes(inventory) {
  let renderedInventory = renderInventory(inventory).split('\n');
  let filteredArray = []

  for (let x = 0; x < renderedInventory.length; x++){
    if (renderedInventory[x].includes('lace')) {
      filteredArray.push(renderedInventory[x] + "\n");
    }
  }
  return filteredArray.join('')
}

function listLaceAndLaceIndex(inventory){
  let brokenDownArray = (breakDownMainArray(inventory))
  let reducedArray = breakDownSubWordArray(brokenDownArray)
  let findWordIndexVar = findWordIndex(reducedArray)
  return JSON.stringify(findWordIndexVar)
}

function breakDownMainArray(inventory){
  let wordsForWork = []
  let renderFilteredLaceArray = listAllLaceShoes(inventory).split(', ')

  for (let x = 0; x < renderFilteredLaceArray.length; x++){
    if (renderFilteredLaceArray[x].includes('lace')) {
      wordsForWork.push(renderFilteredLaceArray[x])
    }
  }
  return wordsForWork
}

function breakDownSubWordArray(words){
  let finalOutput = []
  let wordObject = {nameWords: [], targetWordIndex: 0}

  for (let j = 0; j < words.length; j++) {
    splitWords = words[j].split(" ")
    for (let k = 0; k < splitWords.length; k++){
      wordObject.nameWords.push(splitWords[k])
    }
    finalOutput.push(wordObject)
    wordObject = {nameWords: [], targetWordIndex: 0}
  }
  return finalOutput
}

function findWordIndex(wordsObjectArray){
  for (let x = 0; x < wordsObjectArray.length; x++) {
    let findIndexArray = wordsObjectArray[x].nameWords

    function findLaceWordIndex(element){
      return element.includes('lace')
    }
    wordsObjectArray[x].targetWordIndex = findIndexArray.findIndex(findLaceWordIndex)
  }
  return wordsObjectArray
}


// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName){
  let samelength = actual.length === expected.length
  let sameValues = true

  for(let j = 0; j < expected.length; j++){
    if (expected[j] !== actual[j]) {
      sameValues = false;
      break;
    }
  }

  if (samelength && sameValues) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

function assertEqual(actual, expected, testName){
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '" Expected "' + expected + '\n", but got "' + actual + '"')
  }
}

// TESTS CASES
//****************************** PART A TEST ******************************
actual = renderInventory(currentInventory)
expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\n Brunello Cucinelli, tasselled green low-top lace-up, 1100\n Brunello Cucinelli, plain beige suede moccasin, 950\n Brunello Cucinelli, plain olive suede moccasin, 1050\n Gucci, red leather laced sneakers, 800\n Gucci, black leather laced sneakers, 900\n'
assertEqual(actual, expected, "It should render a flat list of inventory")

//****************************** PART B TEST ******************************
expected = {
 'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
actual = calculateAveragePricePerDesigner(currentInventory)
assertEqual(actual, JSON.stringify(expected), "It returns the average price per designer")

//****************************** PART C TEST ******************************
actual = listAllBlackShoes(currentInventory)
expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\n Gucci, black leather laced sneakers, 900\n'
assertEqual(actual, expected, "It returns filtered content")


//****************************** PART D TEST ******************************
actual = listLaceAndLaceIndex(currentInventory)
expected = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
assertEqual(actual, JSON.stringify(expected), "It returns annoyingly filtered content")









