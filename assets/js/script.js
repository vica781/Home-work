//creat a number array
//array of quiz questions 
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//log all elements of the 'nembers' array to console
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//creat an empty array to select four elements from numbers array
//this selection going to be music for a quiz Question
let randomSelection = [];

//use a 'for' loop to select four random elements from numbers array
//push selected random numbers to randomSelection array
for (let i = 0; i < 4; i++) {
    let randonIndex = Math.floor(Math.random() * numbers.length);
    randomSelection.push(numbers[randonIndex]);
//splice - to replace/remove existing elements from selection with new ones     
    numbers.splice(randonIndex, 1);
}

//creat an empty array to select one element from randomSelection 
//that going to be a Question for the quiz
let selectOne = [];

//generate a random index between 0 and length of randomSelection
let randonIndex = Math.floor(Math.random() * randomSelection.length);

//assign value of randomly selected element to selectOne 
selectOne = randomSelection[randonIndex];

//log the selected element to the console
console.log(selectOne);

//create a copy of randomSelection array to shuffle
let shuffledArray = randomSelection.slice();

//Fisher-Yates shuffle algorithm to shuffle the elements in the shuffledArray
for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
}

//assign the shuffled array as a value to the randomSelectionShuffle variable
//the shuffledArray can be used now as a quiz Question
let randomSelectionShuffle = shuffledArray;

//log the shuffled array to console
console.log(randomSelectionShuffle);

