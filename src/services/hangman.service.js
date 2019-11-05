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
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  this.obtainWord = async function() {
    const response = await fetch('http://127.0.0.1:5500/words.json');
    const words = await response.json();
    this.word = words[
      Math.floor(Math.random() * words.length)
    ].value.toUpperCase();
    this.setCharacters();
    console.log('word', this.word);
  };

  this.getPlayCharacters = function() {
    return this.playCharacters;
  };
  this.setCharacters = function() {
    this.characters = this.word.split('');
    console.log('characters splited', this.characters);
    for (const character of this.characters) {
      this.currentCharactersAsserted = [
        ...this.currentCharactersAsserted,
        { value: character, printed: ' ' }
      ];
    }
  };

  this.reduceLife = function() {
    if (!this.isGameOver()) --this.life;
  };

  this.getLife = function() {
    return this.life;
  };

  this.isGameOver = function() {
    return this.life === 0;
  };

  this.isWin = function() {
    return this.currentCharactersAsserted.every(
      ({ printed }) => printed != ' '
    );
  };

  this.getCurrentCharactersAsserted = function() {
    return this.currentCharactersAsserted;
  };

  this.setCurrentCharactersAsserted = function(currentCharacter = '') {
    for (const character of this.currentCharactersAsserted) {
      if (character.value === currentCharacter) {
        character.printed = currentCharacter;
      }
    }
  };

  this.checkCharacterIsAsserted = function(currentCharacter) {
    return this.characters.some(character => currentCharacter === character);
  };
}
