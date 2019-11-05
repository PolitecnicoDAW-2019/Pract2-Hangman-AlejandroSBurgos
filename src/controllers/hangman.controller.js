function HangmanController(hangmanService, hangmanView) {
  this.hangmanService = hangmanService;
  this.hangmanView = hangmanView;

  this.initEvents = function() {
    this.hangmanService.obtainWord();
    this.hangmanView.printCharactersAsserted(
      this.hangmanService.getCurrentCharactersAsserted()
    );
    const playCharacters = this.hangmanService.getPlayCharacters();
    this.hangmanView.initKeyBoard(playCharacters);
    this.hangmanView.initClickEvents(this.obtainCharacter);
  };

  this.assertingWord = function(character) {
    this.hangmanService.setCurrentCharactersAsserted(character);
    const assertedCharacters = this.hangmanService.getCurrentCharactersAsserted(
      character
    );
    this.hangmanView.printCharactersAsserted(assertedCharacters);

    if (this.hangmanService.isWin()) {
      this.hangmanView.printWin();
    }
  };

  this.wrongCharacter = function() {
    this.hangmanService.reduceLife();
    this.hangmanView.drawLife(this.hangmanService.life);
    if (this.hangmanService.isGameOver()) {
      this.hangmanView.printGameOver();
    }
  };
  this.obtainCharacter = event => {
    const character = event.target.innerText;

    if (this.hangmanService.checkCharacterIsAsserted(character)) {
      this.assertingWord(character);
    } else {
      this.wrongCharacter();
    }
  };
}
