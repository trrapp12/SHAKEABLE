# Shakeable


##### Contributors: Trevor Rapp

---
<br>

https://user-images.githubusercontent.com/11747875/182308645-b06fa31c-70b4-4925-8305-22b6089fe368.mp4

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://trrapp12.github.io/dice-game/)

<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>
<br>

---

### Description:

> "The die has been cast."  --Julius Caesar

<br>
<br>

An innovative approach to the dice game 21.  

**SHAKE YOUR PHONE TO ROLL THE DICE!!!**

First to 20 wins.  Uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer">Accelerometer API</a> to roll the dice, along with Vanilla Javascript to track state, scores of players, and display updated information.

### Project v1.0 demonstrates the following:
---

- [X] <em>User Story 1: </em> User should be able to play with another person.
- [X] <em>User Story 2: </em> User should be able to see whose turn it is.
- [X] <em>User Story 3: </em> User should be able to see updated score.
- [X] <em>User Story 4: </em> User should be able to know who won.
- [X] <em>User Story 5: </em> User should be able to "roll" dice either by shaking phone, pushing button, clicking button, or with keyboard button.
- [X] <em>User Story 6: </em> User should be able to enjoy some fun animations.

---

###  CHALLENGES I OVERCAME

1) creating the acceleration was really fun, and completely new to me.  I had never used it so I had to do a lot of research to figure out how to get it to work.  One issue I found almost immediately is that the accelerometer was quite sensitive, causing the event to fire an overwhelming amount of times.  To overcome this I had to create a throttling function.  

See the function below: 

```javascript

  function throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }
  
  ```
  
  2) When I created key listeners I found I had to anticipate keys the user might think to hit besides the enter button to prevent them from registering.
  
  See code example below: 
  
  ```javascript
  
  const keyHandler = (evt) => {
    if (evt.key === "Enter") {
      if (player1turn === undefined) {
        console.log(`CLICK EVENT, IF STATEMENT: ${player1turn}`);
        determineWhoRollsFirst();
        displayButtonMessage("Roll!");
      } else {
        console.log(`CLICK EVENT, ELSE STATEMENT: ${player1turn}`);
        playerRolls(player1turn, objArray);
        checkForWinner(player1score, player2score);
        player1turn = !player1turn;
      }
    } else if (
      evt.key === "Tab" ||
      evt.key === "ArrowLeft" ||
      evt.key === "Left" ||
      evt.key === "ArrowUp" ||
      evt.key === "Up" ||
      evt.key === "ArrowRight" ||
      evt.key === "Right" ||
      evt.key === "ArrowDown" ||
      evt.key === "Down" ||
      evt.key === " "
    ) {
      console.log("nothing to see here");
    } else {
      alert("Please use the Enter key make selections");
    }
  };
  
  ```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED

🆕 Adding the accelerometer API so that you can shake the phone to roll the dice

🆕 Complete redesign of the appearance including 3 Dimensional dice, rolling animation, and cleaner/better UI.

🆕 Added touch, focus, keyboard, and acceleration events.  Previously only worked with click events.

🆕 Adds color! 

---

### CREDITS: 


Project created by TREVOR RAPP

Original project idea was a code along project from <a href="https://scrimba.com/learn/frontend"> Scrimba's Front End Development Course.</a>

See <a href="https://scrimba.com/playlist/p6wpZHv">original</a>. 


### YOU CAN FIND ME AT:
---

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

