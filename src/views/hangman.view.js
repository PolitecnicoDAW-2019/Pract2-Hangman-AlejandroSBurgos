function HangmanView() {
  this.context = GUI.canvas.getContext('2d');

  this.initKeyBoard = function(characters) {
    for (const character of characters) {
      GUI.divCharacters.innerHTML += `<div class="characters">${character}</div>`;
    }
  };

  this.initClickEvents = function(event) {
    for (const character of GUI.characters) {
      character.addEventListener('click', event);
    }
  };

  this.printCharactersAsserted = function(characters) {
    GUI.expectedWord.innerHTML = '';
    for (const character of characters) {
      GUI.expectedWord.innerHTML += `<div class="expectedCharacter">${character.screen}</div>`;
    }
  };

  this.printGameOver = function() {
    alert('Game Over');
  };

  this.printWin = function() {
    alert('You Win');
  };

  this.drawLines = function(coordinatePoints) {
    const { fromX, fromY, toX, toY } = coordinatePoints;
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.strokeStyle = '#ffffff';
    context.stroke();
  };

  this.drawHead = function() {
    this.context.beginPath();
    this.context.arc(150, 48, 8, 0, 2 * Math.PI);
    this.context.strokeStyle = '#ffffff';
    this.context.stroke();
  };

  this.hangmanElements = [
    {
      //VERTICAL STICK
      param: { fromX: 80, fromY: 30, toX: 80, toY: 120 },
      draw: this.drawLines
    },
    {
      //HORIZONTAL STICK
      param: { fromX: 80, fromY: 30, toX: 150, toY: 30 },
      draw: this.drawLines
    },
    {
      //ROPE
      param: { fromX: 150, fromY: 30, toX: 150, toY: 40 },
      draw: this.drawLines
    },
    {
      // HEAD
      draw: this.drawHead
    },
    {
      //BODY
      param: { fromX: 150, fromY: 55, toX: 150, toY: 80 },
      draw: this.drawLines
    },
    {
      //LEFT ARM
      param: { fromX: 150, fromY: 55, toX: 140, toY: 80 },
      draw: this.drawLines
    },
    {
      //RIGHT ARM
      param: { fromX: 150, fromY: 55, toX: 160, toY: 80 },
      draw: this.drawLines
    },
    {
      //LEFT LEG
      param: { fromX: 150, fromY: 80, toX: 145, toY: 110 },
      draw: this.drawLines
    },
    {
      //RIGHT LEG
      param: { fromX: 150, fromY: 80, toX: 155, toY: 110 },
      draw: this.drawLines
    }
  ];

  this.drawLife = function(life) {
    //TODO undefined value => this.hangmanElements[life]
    if (!this.hangmanElements[life].param) {
      this.hangmanElements[life].draw();
    } else {
      this.hangmanElements[life].draw(this.hangmanElements[life].param);
    }
  };

  this.restartGame = function() {};
}
