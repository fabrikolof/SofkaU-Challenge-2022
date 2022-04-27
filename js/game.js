// @ts-check

import { random } from "../data/questions.js";
import { Game } from "../models/Game.js";
import { Player } from "../models/Player.js";
import { UI } from "../models/UI.js";

/**
 *
 * @param {Game} game the main game object
 * @param {UI} ui ui object
 */
const renderPage = (game, ui) => {
  if (game.idEnded()) {
    let nombre = sessionStorage.getItem("name");
    let player = new Player(nombre);
    player.saveScore(game.score);
    ui.showScores(game.score)
  } else {
    ui.showQuestion(game.getQuestionIndex().text);
    ui.showOptions(game.getQuestionIndex().options, (currentOption) => {
      game.guess(currentOption);
      renderPage(game, ui);
    });
    ui.showProgress(game.questionIndex + 1, game.questions.length);
    ui.showActualScore(game.score);
    ui.showLevel(game.questionIndex + 1)
  }
};

function main() {
  const game = new Game(random());
  const ui = new UI();
  renderPage(game, ui);
  
    // Ends the game by the player
  // function endGameByPlayer(game){
  //   game.questionIndex = game.question.length - 1;
  // }

  document.getElementById("salir").addEventListener("click", () => {
    game.questionIndex = game.questions.length - 1;
  });
}

main();





