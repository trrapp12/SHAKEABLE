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

  let player1score = 0;
  let player2score = 0;
  let player1turn;

  // create functions
  function produceRandomNumber(maxvalue, startvalue) {
    return Math.floor(Math.random() * maxvalue + startvalue);
  }

  function setDisplayNumber(objArray, num) {
    // let a = produceRandomNumber(6, 1);
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
    if (player1turn) {
      scoreOneContainer.textContent = `${player1score}`;
    } else {
      scoreTwoContainer.textContent = `${player2score}`;
    }
  }

  function updateDice(objArray, randNum, func) {
    if (player1turn) {
      diceOne.textContent = setDisplayNumber(objArray, randNum);
    } else {
      diceTwo.textContent = setDisplayNumber(objArray, randNum);
    }
  }

  function playerRolls(player1turn, objArray) {
    let randNum = produceRandomNumber(6, 1);

    if (player1turn) {
      updateScore(player1turn, randNum);
      updateDice(objArray, randNum, setDisplayNumber);
      updatePlayerMessage(player1turn, player1score, player2score);
    } else if (!player1turn) {
      updateScore(player1score, randNum);
      updateDice(objArray, randNum, setDisplayNumber);
      updatePlayerMessage(player1turn, player1score, player2score);
    }
  }

  function changeMessage(player1turn) {
    if (player1turn) {
      messageContainer.textContent = "Player 1's turn!";
    } else {
      messageContainer.textContent = "Player 2's turn";
    }
  }

  function changePlayer(player1turn) {
    player1turn = !player1turn;
  }

  function determineWhoRollsFirst() {
    let a = produceRandomNumber(2, 0);
    console.log(`DETERMINE WHO ROLLS FIRST (): random number is ${a}`);
    if (a === 0) {
      player1turn = true;
      console.log(
        `DETERMINE WHO ROLLS FIRST (), if statement: player1 is ${player1turn}`
      );
    } else {
      player1turn = false;
      console.log(
        `DETERMINE WHO ROLLS FIRST (), else statement: player1 is ${player1turn}`
      );
    }
  }

  // add event listeners

  window.addEventListener("load", () => {
    let a = produceRandomNumber(6, 1);
    let b = produceRandomNumber(6, 1);
    diceOne.textContent = setDisplayNumber(objArray, a);
    diceTwo.textContent = setDisplayNumber(objArray, b);
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
      changePlayer(player1turn);
      changeMessage(player1turn);
    }
  });
})();
