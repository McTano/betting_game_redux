"use strict";
var prompt = require('prompt-sync')();

  function d10() {
    return Math.floor(Math.random() * 10 + 1);
  }

  function validNumber(input, min, max) {
    input = Number(input);
    return !(isNaN(input) || input < min || input > max);
  }

  function validBet(input) {
    return validNumber(input, MIN_BET, MAX_BET);
  }

  function validGuess(input) {
    return validNumber(input, MIN_GUESS, MAX_GUESS);
  }

  var outcome;
  var player = {cash: 100, bet: null, guess: null};
  var MIN_BET = 5;
  var MAX_BET = 10;
  var MIN_GUESS = 1;
  var MAX_GUESS = 10;

  function updateBet() {
    console.log("Please place a bet.");
    player.bet = prompt(">> ");
    if (!validBet(player.bet)) {
      console.log("Please make a bet between " + MIN_BET + " and " + MAX_BET + "\n")
      updateBet();
    }
  }

  function updateGuess() {
    console.log("Please make a guess between " + MIN_GUESS + " and " + MAX_GUESS)
    player.guess = prompt('>> ');
    if (!validGuess(player.guess)) {
    updateGuess();
    }
  }

while (player.cash >= 5) {
  updateBet();
  updateGuess();
  outcome = d10();
  switch (player.guess) {
    case (outcome + 1):
    case (outcome - 1):
      console.log("Pretty close! It was " + outcome + ". You still have " + player.cash + " dollars.");
      break;
    case (outcome):
      player.cash += player.bet;
      console.log("You got it! It was " + outcome + ". Now you have " + player.cash + " dollars.");
      break;
    default:
      player.cash -= player.bet;
      console.log("Wrong! It was " + outcome + ". Now you have " + player.cash + " dollars.");
      break;
  }
}
console.log("You don't have enough money left to bet. Get out of my casino, you bum!");