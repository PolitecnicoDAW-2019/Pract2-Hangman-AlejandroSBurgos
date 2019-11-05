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
    for (const { printed } of characters) {
      GUI.expectedWord.innerHTML += `<div class="expectedCharacter">${printed}</div>`;
    }
  };

  this.printGameOver = function() {
    alert('Game Over');
  };

  this.printWin = function() {
    alert('You Win');
  };

  this.drawLines = coordinatePoints => {
    const { fromX, fromY, toX, toY } = coordinatePoints;
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);
    this.context.strokeStyle = '#ffffff';
    this.context.stroke();
  };

  this.drawHead = () => {
    this.context.beginPath();
    this.context.arc(150, 48, 8, 0, 2 * Math.PI);
    this.context.strokeStyle = '#ffffff';
    this.context.stroke();
  };

  this.hangmanElements = {
    8: {
      //VERTICAL STICK
      param: { fromX: 80, fromY: 30, toX: 80, toY: 120 },
      draw: this.drawLines
    },
    7: {
      //HORIZONTAL STICK
      param: { fromX: 80, fromY: 30, toX: 150, toY: 30 },
      draw: this.drawLines
    },
    6: {
      //ROPE
      param: { fromX: 150, fromY: 30, toX: 150, toY: 40 },
      draw: this.drawLines
    },
    5: {
      // HEAD
      draw: this.drawHead
    },
    4: {
      //BODY
      param: { fromX: 150, fromY: 55, toX: 150, toY: 80 },
      draw: this.drawLines
    },
    3: {
      //LEFT ARM
      param: { fromX: 150, fromY: 55, toX: 140, toY: 80 },
      draw: this.drawLines
    },
    2: {
      //RIGHT ARM
      param: { fromX: 150, fromY: 55, toX: 160, toY: 80 },
      draw: this.drawLines
    },
    1: {
      //LEFT LEG
      param: { fromX: 150, fromY: 80, toX: 145, toY: 110 },
      draw: this.drawLines
    },
    0: {
      //RIGHT LEG
      param: { fromX: 150, fromY: 80, toX: 155, toY: 110 },
      draw: this.drawLines
    }
  };

  this.drawLife = life => {
    //TODO undefined value => this.hangmanElements[life]
    if (life === 5) {
      this.hangmanElements[life].draw();
    } else {
      const params = this.hangmanElements[life].param;
      this.hangmanElements[life].draw(params);
    }
  };

  this.restartGame = function() {};
}
