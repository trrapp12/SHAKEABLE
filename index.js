(() => {
  // due to the type of font that is downloaded that will show dice as dot values instead of numbers, to get the right display for a dice we have to refer to it by the letter corresponding to the font.  Therefore it became useful to create an array of objects that associated the number value and letter that it corresponded to.
  const objArray = [
    {
      letter: "k",
      sidevalue: 1,
    },
    {
      letter: "l",
      sidevalue: 2,
    },
    {
      letter: "m",
      sidevalue: 3,
    },
    {
      letter: "n",
      sidevalue: 4,
    },
    {
      letter: "o",
      sidevalue: 5,
    },
    {
      letter: "p",
      sidevalue: 6,
    },
  ];

  // grab necessary elements that need to be populated

  const diceOne = document.getElementById("dice-1");
  const diceTwo = document.getElementById("dice-2");
  const scoreOneContainer = document.getElementById("score-1");
  const scoreTwoContainer = document.getElementById("score-2");
  const messageContainer = document.getElementById("message");
  const button = document.getElementById("button");

  var player1score = 0;
  var player2score = 0;
  var player1turn;

  // create functions
  function produceRandomNumber(maxvalue, startvalue) {
    return Math.floor(Math.random() * maxvalue + startvalue);
  }

  function setDisplayNumber(objArray, num) {
    return objArray[num - 1].letter;
  }

  function updateScore(player1turn, randNum) {
    if (player1turn) {
      player1score += objArray[randNum - 1].sidevalue;
    } else {
      player2score += objArray[randNum - 1].sidevalue;
    }
  }

  function updatePlayerMessage(player1turn, player1score, player2score) {
    scoreOneContainer.textContent = `${player1score}`;
    scoreTwoContainer.textContent = `${player2score}`;
  }

  function updateDice(objArray, randNum, func) {
    if (player1turn) {
      diceOne.textContent = setDisplayNumber(objArray, randNum);
    } else {
      diceTwo.textContent = setDisplayNumber(objArray, randNum);
    }
  }

  function changeMessage(player1turn) {
    if (player1turn) {
      messageContainer.textContent = "Player 2's turn!";
    } else {
      messageContainer.textContent = "Player 1's turn";
    }
  }

  function playerRolls(player1turn, objArray) {
    let randNum = produceRandomNumber(6, 1);

    if (player1turn) {
      updateScore(player1turn, randNum);
      updateDice(objArray, randNum, setDisplayNumber);
      updatePlayerMessage(player1turn, player1score, player2score);
    } else {
      updateScore(player1turn, randNum);
      updateDice(objArray, randNum, setDisplayNumber);
      updatePlayerMessage(player1turn, player1score, player2score);
    }
    checkForWinner(player1score, player2score);
  }

  function determineWhoRollsFirst() {
    let a = produceRandomNumber(2, 0);
    console.log(`DETERMINE WHO ROLLS FIRST (): random number is ${a}`);
    if (a === 0) {
      player1turn = true;
      console.log(
        `DETERMINE WHO ROLLS FIRST (), if statement: player1 is ${player1turn}`
      );
      messageContainer.textContent = "Player 1 goes first";
    } else {
      player1turn = false;
      console.log(
        `DETERMINE WHO ROLLS FIRST (), else statement: player1 is ${player1turn}`
      );
      messageContainer.textContent = "Player 2 goes first";
    }
  }

  function resetGame() {
    player1score = 0;
    player2score = 0;
    player1turn = undefined;

    scoreTwoContainer.textContent = " - ";
    scoreOneContainer.textContent = " - ";
    setInterval(() => {
      messageContainer.textContent = "Click or shake to see who plays first";
    }, 3000);
  }

  function checkForWinner(player1score, player2score) {
    if (player1score >= 20 && player2score < 20) {
      messageContainer.textContent = "Player 1 wins";
      setTimeout(() => {
        resetGame();
      }, 500);
    } else if (player2score >= 20 && player1score < 20) {
      messageContainer.textContent = "Player 2 wins";
      setTimeout(() => {
        resetGame();
      }, 500);
    } else if (player1score === 20 && player2score === 20) {
      messageContainer.textContent = "It's a tie!";
      setTimeout(() => {
        resetGame();
      }, 500);
    } else {
      changeMessage(player1turn);
    }
  }

  window.addEventListener("load", () => {
    let a = produceRandomNumber(6, 1);
    let b = produceRandomNumber(6, 1);
    diceOne.textContent = setDisplayNumber(objArray, a);
    diceTwo.textContent = setDisplayNumber(objArray, b);
    button.textContent = "Click or shake to see who plays first";
  });

  button.addEventListener("click", () => {
    console.log(`CLICK EVENT: player 1 is ${player1turn}`);
    if (player1turn === undefined) {
      console.log(`CLICK EVENT, IF STATEMENT: ${player1turn}`);
      determineWhoRollsFirst();
      button.textContent = "Roll";
    } else {
      console.log(`CLICK EVENT, ELSE STATEMENT: ${player1turn}`);
      playerRolls(player1turn, objArray);
      checkForWinner(player1score, player2score);
      player1turn = !player1turn;
    }
  });

  button.addEventListener("touchstart", () => {
    console.log(`CLICK EVENT: player 1 is ${player1turn}`);
    if (player1turn === undefined) {
      console.log(`CLICK EVENT, IF STATEMENT: ${player1turn}`);
      determineWhoRollsFirst();
      button.textContent = "Roll";
    } else {
      console.log(`CLICK EVENT, ELSE STATEMENT: ${player1turn}`);
      playerRolls(player1turn, objArray);
      checkForWinner(player1score, player2score);
      player1turn = !player1turn;
    }
  });

  button.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" || evt.key === "") {
      if (player1turn === undefined) {
        console.log(`CLICK EVENT, IF STATEMENT: ${player1turn}`);
        determineWhoRollsFirst();
        button.textContent = "Roll";
      } else {
        console.log(`CLICK EVENT, ELSE STATEMENT: ${player1turn}`);
        playerRolls(player1turn, objArray);
        checkForWinner(player1score, player2score);
        player1turn = !player1turn;
      }
    } else if (
      evt.key === "Tab" ||
      evt.key === "ArrowLeft" ||
      evt.key === "ArrowUp" ||
      evt.key === "ArrowRight" ||
      evt.key === "ArrowDown" ||
      evt.key === ""
    ) {
      console.log("nothing to see here");
    } else {
      alert("Please use the Enter key make selections");
    }
  });

  window.addEventListener("devicemotion", function (event) {
    setInterval(() => {
      if (
        event.acceleration.x > 20 ||
        event.acceleration.y > 20 ||
        event.acceleration.z > 20
      ) {
        if (player1turn === undefined) {
          console.log(`CLICK EVENT, IF STATEMENT: ${player1turn}`);
          determineWhoRollsFirst();
          button.textContent = "Roll";
        } else {
          console.log(`CLICK EVENT, ELSE STATEMENT: ${player1turn}`);
          playerRolls(player1turn, objArray);
          checkForWinner(player1score, player2score);
          player1turn = !player1turn;
        }
      }
    }, 25);
  });
})();
