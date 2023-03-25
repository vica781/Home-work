//creating a number array
//array of quiz questions 
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//to log all elements of the 'nembers' array to console
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//creatig an empty array to select four elements from numbers array
//this selection going to be music for a quiz Question
let randomSelection = [];

//using a 'for' loop to select four random elements from numbers array
//pushing selected random numbers to randomSelection array
for (let i = 0; i < 4; i++) {
    let randonIndex = Math.floor(Math.random() * numbers.length);
    randomSelection.push(numbers[randonIndex]);
//splice - to replace/remove existing elements from selection with new ones     
    numbers.splice(randonIndex, 1);
}

//creating an empty array to select one element from randomSelection 
//that going to be a Question for the quiz
let selectOne = [];



