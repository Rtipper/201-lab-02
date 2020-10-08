'use strict';

var username = prompt('What is your name?')
// console.log('Greetings ' + username);
alert('Greetings ' + username)

var pointTotal = 0;

// Ryan - Question 1:
var homeLocation = prompt('Am I from outer space?').toLowerCase();

function questionOne() {
  if (homeLocation === 'yes' || homeLocation === 'y') {
    // console.log('Yes! I live in outer space');
    alert('Yes! I live in outer space.');
    pointTotal++;
  } else if (homeLocation === 'no' || homeLocation === 'n') {
      // console.log('That is incorrect as I am indeed from outer space');
      alert('That is incorrect as I am indeed from outer space.');
    }
}
questionOne();  


// Ryan - Question 2:
var planet = prompt('Am I from the planet Neptune?').toLowerCase();

function questionTwo(){
  if (planet === 'yes' || planet === 'y') {
    // console.log('Yes! I am indeed from Neptune');
    alert('Yes! I am indeed from Neptune');
    pointTotal++;
  } else if (planet === 'no' || planet === 'n') {
    // console.log('Incorrect, I do indeed hail from the wounderous Neptune!')
    alert('Incorrect, I do indeed hail from the wonderous Neptune!');
  }
}
questionTwo();

// Ryan - Question 3:
var rocketShip = prompt('Did I first arrive there via rocket ship?').toLowerCase();
if (rocketShip === 'yes' || rocketShip === 'y') {
  // console.log('Yes! I did arrive by rocket ship');
  alert('Yes! I did first arrive there by rocket ship');
  pointTotal++;
} else if (rocketShip === 'no' || rocketShip === 'n') {
  // console.log('That is incorrect. I did indeed arrive on a rocket ship. Space is cold!')
  alert('That is incorrect. I did indeed arrive on a rocket ship. Space is cold!');
}

// Ryan - Question 4:
var returnHome = prompt('Will you help me return home?').toLowerCase();
if (returnHome === 'yes' || returnHome === 'y') {
  // console.log('Yes? Hooray! I can/t wait to retun home!');
  alert('Yes? Hooray! I cant wait to retun home!');
  pointTotal++;
} else if (returnHome === 'no' || returnHome === 'n') {
  // console.log ('Excuse me? I am a guest on your planet and you are being so rude as to not help!?')
  alert('Excuse me? I am a guest on your planet and you are being so rude as to not help!?');
}

// Ryan - Question 5:
var doYouHave = prompt('Wait, do you have an extra rocket ship?').toLowerCase();
if (doYouHave === 'yes' || doYouHave === 'y') {
  // console.log('This is wonderful news indeed!');
  alert('This is wonderful news indeed!');
  pointTotal++;
} else if (doYouHave === 'no' || returnHome === 'n') {
  // console.log ('You dont? Hmm. This is a problem.');
  alert('You dont? Hmmm. This is a problem.');
}


// Final Message
// alert('It is wonderful to meet you ' + username + '. ' + 'I am so thrilled you could tell I am from Neptune' + '. ' + 'Did my accent give it away' + '? ' + 'I can tell you realized I am now stranded here no thanks in part to the smoldering wreckage of metal behind me that used to be my ship' + '. ' + 'I am so happy to hear you have a spare rocket ship that can take me home' + '! ' + 'Shall we lift off to the cosmos above' + '? ');

// Final Message with Template Literal
alert(`Either way, it is wonderful to meet you ${username}! I am so thrilled you now know I am from Neptune. Did my accent give it away? Obviously I am now stranded here no thanks in part to the smoldering wreckage of metal behind me that used to be my ship. Weather you do or do not have a spare rocket ship that can take me home, I shall find my way back! Shall we lift off to the cosmos above?`);

// Ryan - Question 6 (Lab 3 Update):
var numberRange = 10;
var numberOfGuesses = 0;
var maxTries = 5; //Max number of times the user can guess the random number
var usersGuess = null; //The number the user guessed
var targetNumber = Math.floor(Math.random() * numberRange) + 1; //Random number the user is trying to guess

function questionSix (){
  while (usersGuess != targetNumber && numberOfGuesses < maxTries) {
    usersGuess = prompt("Please select a random number between 1 and " + numberRange);
    numberOfGuesses += 1;

    //Check if the user entered a number
    if(isNaN(usersGuess)){
        alert(`Nice try ${username} but that aint even a number.`);
    } 
    else
    {
        //Check if the user's guess was too high or too low
        if(usersGuess > targetNumber){
            alert(`Too high, ${username}`);
        }
        if(usersGuess < targetNumber){
            alert(`Too low, ${username}`);
        }

        //The user guessed correctly
        if (usersGuess == targetNumber){
          alert(`Well done ${username}, that is correct! The random number was ${targetNumber}! It took you ${counter} attempts to get the correct number`);
          pointTotal++;
        }
    }

      //User guessed incorrectly on their last attempt, wish them luck
    if (numberOfGuesses == maxTries && usersGuess != targetNumber) {
      alert("You have no more tries left. Better luck next time.");
    }
  }
}
questionSix();

// Ryan - Question 7 (Lab 3 Update):
var counter = 0;
var maxTries = 6;
var campingList = ['tent', 'backpack', 'sleeping bag', 'food', 'hat'];
var usersGuess = null;
var foundMatch = false;

while (!foundMatch && counter < maxTries) {
  usersGuess = prompt("Please enter items for camping");
  counter += 1;

  for (var i = 0; i < campingList.length; i++) {
    if(campingList[i].toLowerCase() == usersGuess.toLowerCase()){
        foundMatch = true;
        break;
    }
  }

  if(foundMatch){
      alert("Correct! A "+usersGuess+" is on the camping list.");
      pointTotal++;
  } else{
      alert("Sorry, A "+usersGuess+" is NOT on the camping list.");
      if(counter == maxTries){
          alert(`You have no more tries left. Better luck next time ${username}. The correct answers are tent, backpack, sleeping bag, food and hat. Press F5 to play again!` );
      }
  }
}

alert(`The total amount of points you got is ${pointTotal}!`)