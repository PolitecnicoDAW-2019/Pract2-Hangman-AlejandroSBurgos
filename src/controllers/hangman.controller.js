function HangmanController(hangmanService, hangmanView) {
  this.hangmanService = hangmanService;
  this.hangmanView = hangmanView;

  this.initEvents = function() {
    const playCharacters = this.hangmanService.getPlayCharacters();
    this.hangmanView.initKeyBoard(playCharacters);
    this.hangmanService.setWord();
    this.hangmanView.printCharactersAsserted(
      this.hangmanService.getWordLength()
    );
    this.hangmanView.initClickEvents(this.obtainCharacter);
  };

  this.assertingWord = function() {
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
    this.hangmanView.drawLife(this.hangmanService.getLife());
    if (this.hangmanService.isGameOver()) {
      this.hangmanView.printGameOver();
    }
  };
  this.this.obtainCharacter = event => {
    const character = event.target.innerText;

    if (this.hangmanService.checkCharacterIsAsserted(character)) {
      this.assertingWord();
    } else {
      this.wrongCharacter();
    }
  };
}
