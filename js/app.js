'use strict';

var username = prompt('What is your name?')
// console.log('Greetings ' + username);
alert('Greetings ' + username)

// Ryan - Question 1:
var homeLocation = prompt('Am I from outer space?').toLowerCase();
if (homeLocation === 'yes' || homeLocation === 'y') {
  // console.log('Yes! I live in outer space');
  alert('Yes! I live in outer space');
}

// Ryan - Question 2:
var planet = prompt('Am I from the planet Neptune?').toLowerCase();
if (planet === 'yes' || planet === 'y') {
  // console.log('Yes! I am indeed from Neptune');
  alert('Yes! I am indeed from Neptune');
}

// Ryan - Question 3:
var rocketShip = prompt('Did I first arrive there via rocket ship?').toLowerCase();
if (rocketShip === 'yes' || rocketShip === 'y') {
  // console.log('Yes! I did arrive by rocket ship');
  alert('Yes! I did first arrive there by rocket ship');
}

// Ryan - Question 4:
var returnHome = prompt('Will you help me return home?').toLowerCase();
if (returnHome === 'yes' || returnHome === 'y') {
  // console.log('Yes? Hooray! I can/t wait to retun home!');
  alert('Yes? Hooray! I cant wait to retun home!');
}

// Ryan - Question 5:
var doYouHave = prompt('Wait, do you have an extra rocket ship?').toLowerCase();
if (doYouHave === 'yes' || doYouHave === 'y') {
  // console.log('This is wonderful news indeed!');
  alert('This is wonderful news indeed!');
}

// Final Message
// alert('It is wonderful to meet you ' + username + '. ' + 'I am so thrilled you could tell I am from Neptune' + '. ' + 'Did my accent give it away' + '? ' + 'I can tell you realized I am now stranded here no thanks in part to the smoldering wreckage of metal behind me that used to be my ship' + '. ' + 'I am so happy to hear you have a spare rocket ship that can take me home' + '! ' + 'Shall we lift off to the cosmos above' + '? ');

// Final Message with Template Literal
alert(`It is wonderful to meet you ${username}! I am so thrilled you could tell I am from Neptune. Did my accent give it away? I can tell you realized I am now stranded here not thanks in part to the smoldering wreckage of metal behind me that used to be my ship. I am so happy to hear you have a spare rocket ship that can take me home! Shall we lift off to the cosmos above?`);

// Ryan - Question 6 (Lab 3 Update):
var numberRange = 10;
var numberOfGuesses = 0;
var MaxTries = 5; //Max number of times the user can guess the random number
var usersGuess = null; //The number the user guessed
var targetNumber = Math.floor(Math.random() * numberRange) + 1; //Random number the user is trying to guess

while (usersGuess != targetNumber && numberOfGuesses < MaxTries) {
  usersGuess = prompt("Please select a random number between 1 and " + numberRange);
  numberOfGuesses += 1;

  //Check if the user entered a number
  if(isNaN(usersGuess)){
      alert("Dude... That's not even a number.");
  } 
  else
  {
      //Check if the user's guess was too high or too low
      if(usersGuess > targetNumber){
          alert("Too high");
      }
      if(usersGuess < targetNumber){
          alert("Too low");
      }

      //The user guessed correctly
      if (usersGuess == targetNumber){
        alert(`Well done, that is correct! The random number was ${targetNumber}! It took you ${counter} attempts to get the correct number`);
      }
  }

    //User guessed incorrectly on their last attempt, wish them luck
  if (numberOfGuesses == MaxTries && usersGuess != targetNumber) {
    alert("You have no more tries left. Better luck next time.");
  }
}

// Ryan - Question 7 (Lab 3 Update):
var counter = 0;
var MaxTries = 6;

var campingList = ['tent', 'backpack', 'sleeping bag', 'food', 'hat'];
for (var i = 0; i < campingList.length; i++) {

}

while (Attempts != listItems) {
  var Attempts = prompt("Please enter items for camping ");
  counter += 1;
  }

  if (counter > MaxTries) {
    alert("You have no more tries left. Better luck next time.");
  }

var listItems = prompt('What items do you need to bring for camping?').toLowerCase();
if (listItems === 'tent', 'back pack', 'sleeping bag', 'food', 'hat') {
  // console.log('Yes! I live in outer space');
  alert('That is correct!');

  
  }