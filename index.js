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
  ]

  const diceOne = document.getElementById('dice-1');
  const diceTwo = document.getElementById('dice-2')

  function produceRandomNumber (maxvalue, startvalue) {
    return Math.floor((Math.random() * maxvalue) + startvalue)
  }

  function setDisplayNumber (objArray) {
    let a = produceRandomNumber(6, 1);
    return objArray[a-1].letter
  }

  window.addEventListener('load', () => {
    diceOne.textContent = setDisplayNumber(objArray);
    diceTwo.textContent = setDisplayNumber(objArray);
  })

})();