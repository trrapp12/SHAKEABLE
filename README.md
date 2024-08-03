# Shakeable


##### Contributors: Trevor Rapp

---
<br>

https://user-images.githubusercontent.com/11747875/182308645-b06fa31c-70b4-4925-8305-22b6089fe368.mp4

<br>

<br>

https://github.com/trrapp12/dice-game/assets/11747875/900e20d8-646e-48c1-8841-88a80f10cc33

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://trrapp12.github.io/SHAKEABLE/)

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

*First to 20 wins.  Uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer">Accelerometer API</a> to roll the dice, along with Vanilla Javascript to track state, scores of players, and display updated information.*

---

### QUICKSTART GUIDE: 

Click on the "View Project" button above ⬆️ or go to <a href="https://trrapp12.github.io/SHAKEABLE/">https://trrapp12.github.io/SHAKEABLE/</a>.

<br/>

---

### Project v1.0 demonstrates the following:

- [X] <em>User Story 1: </em> User should be able to play with another person.
- [X] <em>User Story 2: </em> User should be able to see whose turn it is.
- [X] <em>User Story 3: </em> User should be able to see updated score.
- [X] <em>User Story 4: </em> User should be able to know who won.
- [X] <em>User Story 5: </em> User should be able to "roll" dice either by shaking phone, pushing button, clicking button, or with keyboard button.
- [X] <em>User Story 6: </em> User should be able to enjoy some fun animations.

<br/>

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

<br/>


---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED

🆕 Adding the accelerometer API so that you can shake the phone to roll the dice

🆕 Complete redesign of the appearance including 3 Dimensional dice, rolling animation, and cleaner/better UI.

🆕 Added touch, focus, keyboard, and acceleration events.  Previously only worked with click events.

🆕 Adds color! 

<br/>

---

### SCRIMBA FRONT END DEVELOPER CAREER CERTIFICATE:

*This project was completed as part of the Scrimba [The Frontend Career Path](https://scrimba.com/learn/frontend), which is composed of:*

* over 1000 lessons
* over 65 hours of instruction
* over 30 instructor-lead, hands-on projects
* over 15 Solo Projects (completed completely alone, with only Figma files and user stories provided.)

![Scrimba Frontend Developer Career Path Certificate of Completion](https://private-user-images.githubusercontent.com/11747875/286343080-af711cc7-262a-4e10-b714-38242281f13a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDE5MTksIm5iZiI6MTcwMTIwMTYxOSwicGF0aCI6Ii8xMTc0Nzg3NS8yODYzNDMwODAtYWY3MTFjYzctMjYyYS00ZTEwLWI3MTQtMzgyNDIyODFmMTNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIwMDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmZjY2MGEwZDJlZjk1ZWQ0NTI2MmViM2IxNmYyNWVhYTYzYjc4NDYxYzNjNTBiNmMwZmQ2YjhjMzk2NGRlMzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cHBvWMxpR5PRF-Aw44drZbsAgS64QlpdTXDzz9xUYhY)

[CERTIFICATE OF COMPLETION - The Frontend Developer Career Path.pdf](https://github.com/trrapp12/dice-game/files/13483804/CERTIFICATE.OF.COMPLETION.-.The.Frontend.Developer.Career.Path.pdf)

<br/>

---

### ATTRIBUTIONS: 


Project created by TREVOR RAPP

Original project idea was a code along project from <a href="https://scrimba.com/learn/frontend"> Scrimba's Front End Development Course.</a>

See <a href="https://scrimba.com/playlist/p6wpZHv">original</a>. 


<br/>

---

### YOU CAN FIND ME AT:


\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

