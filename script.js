"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let lostScore = 20;

// check button
document.querySelector(".check").addEventListener("click", function () {
  const guessed = Number(document.querySelector(".guess").value);

  // empty input
  if (!guessed) {
    document.querySelector(".message").textContent =
      "Choose a number first! 🤦‍♂️";

    //winner winner chicken dinner
  } else if (guessed === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b247";
    document.querySelector(".message").textContent = "Correct number! 🍾";
    if (lostScore > highscore) {
      highscore = lostScore;
      document.querySelector(".highscore").textContent = lostScore;
    }

    //score too low
  } else if (guessed < secretNumber) {
    if (lostScore > 1) {
      document.querySelector(".message").textContent = "Too low, try again 😉";
      lostScore--;
      document.querySelector(".score").textContent = lostScore;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 😭";
      document.querySelector(".score").textContent = 0;
    }

    //score too high
  } else {
    if (lostScore > 1) {
      document.querySelector(".message").textContent = "Too high, try again 😘";
      lostScore--;
      document.querySelector(".score").textContent = lostScore;
    } else {
      document.querySelector(".message").textContent = "You lost the game! 😭";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// resseting the game
document.querySelector(".again").addEventListener("click", function () {
  lostScore = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".score").textContent = lostScore;
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
});
