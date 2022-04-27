// @ts-check

console.log("funciona 1")
import { random } from "../data/questions.js";
console.log("funciona 2")
import { Game } from "../models/Game.js";
console.log("funciona 3")
import { Player } from "../models/Player.js";
console.log("funciona 4")
import { UI } from "../models/UI.js";
console.log("funciona 5")


/**
 *
 * @param {Game} game the main game object
 * @param {UI} ui ui object
 */
const renderPage = (game, ui) => {


  //test
    ui.showQuestion(game.getQuestionIndex().text);
    ui.showOptions(game.getQuestionIndex().options, (currentOption) => {
      game.guess(currentOption);
      renderPage(game, ui);
    });


  // if (game.idEnded()) {
  //   let nombre = sessionStorage.getItem("name");
  //   let player = new Player(nombre);
  //   player.saveScore(game.score);
  //   ui.showScores(game.score)
  // } else {
  //   ui.showQuestion(game.getQuestionIndex().text);
  //   ui.showOptions(game.getQuestionIndex().options, (currentOption) => {
  //     game.guess(currentOption);
  //     renderPage(game, ui);
  //   });
  //   ui.showProgress(game.questionIndex + 1, game.questions.length);
  //   ui.showActualScore(game.score);
  //   ui.showLevel(game.questionIndex + 1)
  // }
};

function main() {
  const game = new Game(random());
  const ui = new UI();
  renderPage(game, ui);
  
}


main();







document.getElementById("salir").addEventListener("click", () => {
  redirection(gameLocalHost, rankingLocalHost, rankingGithub)
});
