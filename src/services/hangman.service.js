function HangmanService() {
  this.word = '';
  this.characters = [];
  this.currentCharactersAsserted = [];
  this.life = 9;
  this.playCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  this.obtainWord = function() {
    /*fetch('http://127.0.0.1:5500/words.json')
      .then(response => response.json())
      .then(
        words =>
          (this.characters = words[Math.floor(Math.random() * words.length)])
      );*/
    return { value: 'Tecnologia' };
  };

  this.getPlayCharacters = function() {
    return this.playCharacters;
  };
  this.setWord = function() {
    const word = this.obtainWord();
    this.characters = word.value.split('');
    for (const character of this.characters) {
      this.currentCharactersAsserted = [
        ...this.currentCharactersAsserted,
        { value: character, screen: ' ' }
      ];
    }
    this.word = word.value.toUpperCase();
  };

  this.reduceLife = function() {
    if (!this.isGameOver()) {
      this.life - 1;
    }
  };

  this.getLife = function() {
    return this.life;
  };

  this.isGameOver = function() {
    return this.life === 0;
  };

  this.isWin = function() {
    let screenWord = this.currentCharactersAsserted.map(currentCharacter => {
      currentCharacter = currentCharacter.screen;
    });
    screenWord = screenWord.join('');
    const realWord = this.characters.join('');
    return screenWord == realWord;
  };

  this.getCurrentCharactersAsserted = function(currentCharacter) {
    return this.currentCharactersAsserted.map(character => {
      if (character.value === currentCharacter) {
        character.screen = currentCharacter;
      }
    });
  };

  this.checkCharacterIsAsserted = function(currentCharacter) {
    return this.characters.some(_character => currentCharacter === _character);
  };

  this.getWordLength = function() {
    return this.currentCharactersAsserted;
  };
}
