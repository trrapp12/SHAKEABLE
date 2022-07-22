(() => {

  // due to the type of font that is downloaded that will show dice as dot values instead of numbers, to get the right display for a dice we have to refer to it by the letter corresponding to the font.  Therefore it became useful to create an array of objects that associated the number value and letter that it corresponded to.
  const objArray = [
    {
      'letter' : 'k',
      'sidevalue' : 1
    },
    {
      'letter' : 'l',
      'sidevalue' : 2
    },
    {
      'letter' : 'm',
      'sidevalue' : 3
    },
    {
      'letter' : 'n',
      'sidevalue' : 4
    },
    {
      'letter' : 'o',
      'sidevalue' : 5
    },
    {
      'letter' : 'p',
      'sidevalue' : 6
    }
  ];

    // grab necessary elements that need to be populated

  const diceOne = document.getElementById('dice-1');
  const diceTwo = document.getElementById('dice-2');
  const scoreOneContainer = document.getElementById('score-1');
  const scoreTwoContainer = document.getElementById('score-2');
  const messageContainer = document.getElementById('message');
  const button = document.getElementById('button');

  let player1score = 0;
  let player2score = 0;
  let player1;
  
  // create functions
  function produceRandomNumber (maxvalue, startvalue) {
    return Math.floor((Math.random() * maxvalue) + startvalue);
  }

  function setDisplayNumber (objArray, num) {
    // let a = produceRandomNumber(6, 1);
    return objArray[num-1].letter;
  }

  function playerRolls (player1, objArray) {
    console.log(`entering playerRolls: player1 is ${player1} and objArray is ${objArray}`);
    let randNum = produceRandomNumber(6, 1);
    if (player1) {
      player1score += objArray[randNum - 1].sidevalue;
      diceOne.textContent = setDisplayNumber(objArray, randNum);
      scoreOneContainer.textContent = player1score;
      console.log(`playerRolls if statement: player is true. randNum is ${randNum} and player1score is ${player1score}`);
    } else if (!player1) {
      player2score += objArray[randNum - 1].sidevalue;
      diceTwo.textContent = setDisplayNumber(objArray, randNum);
      scoreTwoContainer.textContent = player2score;
      console.log(`playerRolls else statement: player is false. randNum is ${randNum} and player1score is ${player1score}`);
    }
  }
  
  function changePlayer (player1) {
    console.log(`entering changePlayer(); player1 is ${player1}`);
    if (player1) {
      
      messageContainer.textContent = "Player 1's turn!";
      diceTwo.classList.remove('active');
      diceOne.classList.add('active');
      player1 = false;
      console.log(`changePlayer: true, player1 is ${player1}`);
    } else {
      messageContainer.textContent = "Player 2's turn";
      diceTwo.classList.remove('active');
      diceOne.classList.add('active');
      player1 = true;
      console.log(`changePlayer: false, player1 is ${player1}`);
    }
  }

  function determineWhoRollsFirst () {
    let a = produceRandomNumber(2, 0);
    console.log("determineWHoRollsFirst: " + a);
    if ( a === 0) {
      player1 = true;
      console.log("determineWhoRollsFirst: player1 = " + player1);
    } else {
      player1 = false;
      console.log("determineWhoRollsFirst: player1 = " + player1);
    }
  }

  window.addEventListener('load', () => {
    let a = produceRandomNumber(6, 1);
    let b = produceRandomNumber(6, 1);
    diceOne.textContent = setDisplayNumber(objArray, a);
    diceTwo.textContent = setDisplayNumber(objArray, b);
  });

  button.addEventListener('click', (player1) => {
    console.log(`CLICK EVENT: player 1 is ${player1}`)
    if (player1 === undefined) {
      console.log(`CLICK EVENT, IF STATEMENT: ${player1}`);
      determineWhoRollsFirst();
      button.textContent = "Roll";
    } else {
      console.log(`CLICK EVENT, ELSE STATEMENT: ${player1}`);
      playerRolls(player1, objArray);
      changePlayer(player1)
    }
  });

})();