//0. Do you want to practice transposing from or to?
//If from
//1. What key is your instrument in?
//2. What key do you want your instrument to play?
//3. Now let's practice
//  a. Output: Transpose this random note
//  b. Input: This is the transposed note

//let readKey = prompt("Hello music world! What key do you want to practice being heard?");
//let readKey = prompt("What key is you instrument in")

//Program Name: Major Key Transposer

let completeList = ['Cb', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#'];
let stepAndAHalfDownList = ['Ab', 'A', 'A#', 'Bb', 'B', 'B#', 'Cb', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F', 'F#', 'Gb', 'G', 'G#' ];
let quality = ['major', 'minor'];
let cKey = ['C', 'B', 'Bb', 'A#', 'A', 'Ab', 'G#', 'G', 'Gb', 'F#', 'F', 'E', 'Eb', 'D#', 'D', 'Db', 'C#'];
let ebKey = ['A', 'Ab', 'G', 'Gb', 'F', 'E', 'Eb', 'D', 'Db', 'C', 'B', 'Bb'];
let randomNumb = randomZeroToTwenty();
let randomEnhInt = randomIntEnhList();
let randomNonEnhInt = randomIntNonEnhList();
var transposeRequest = completeList[randomNumb];
var transposeSolution = ebKey[randomNonEnhInt];

//Node require function for prompt module
const prompt = require('prompt');
prompt.start();


//Process
console.log(`What is the transposed equivalent of ${transposeRequest}?`);

prompt.get(['userResponse'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('You entered: ' + result.userResponse);
    if ((transposeRequest == 'A#') || (transposeRequest == 'G#') || (transposeRequest == 'F#') || (transposeRequest == 'D#') || (transposeRequest =='C#')) {
      return transposeExceptionsFxn();
    }
    else {
      console.log("When you transpose " + transposeRequest + " you get: " + transposeSolution);
    }

});



// if ((transposeRequest != 'A#') || (transposeRequest != 'G#') || (transposeRequest != 'F#') || (transposeRequest != 'D#') || (transposeRequest !='C#')) {
//   console.log("When you transpose " + transposeRequest + " you get: " + transposeSolution);
// }
// else {
//   return transposeFxn();
// }


function onErr(err) {
    console.log(err);
    return 1;
}

// Get random number from 0-20 for list of notes with Enharmonic equivalent
function randomZeroToTwenty() {
  return Math.floor((Math.random() * 20) + 1);

// Get random number from 0-16 for list of notes with Enharmonic equivalent
function randomIntEnhList() {
  return Math.floor((Math.random() * 16) + 1);
}

//Get random number from 0-11 for list of notes without Enharmonic equivalent
function randomIntNonEnhList() {
  return Math.floor((Math.random() * 11) + 1);
}

//transposerFunction
function transposeExceptionsFxn() {

  switch (transposeRequest) {
    case 'A#':
      solution = "G#";
      break;
    case 'G#':
      solution = "F";
      break;
    case 'F#':
      solution = "Eb"
      break;
    case 'D#':
      solution = "C"
      break;
    case 'C#':
      solution = "Bb"
      break;
  }

  console.log("When you transpose " + transposeRequest + " you get: " + solution);
}


//NOTE: YOU STILL HAVE TO ACCOUNT FOR Enharmonic equivalents ex if transposeRequest is A# yeah the equivalent is G but
//if it's Bb it should also be G, not G# as it's currently programmed
