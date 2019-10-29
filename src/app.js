const controller = new HangmanController(
  new HangmanService(),
  new HangmanView()
);

controller.initEvents();
