// // @ts-check
// import { random } from "../data/questions.mjs";
// import { Game } from "../models/Game.mjs";
// import { Player } from "../models/Player.mjs";
// import { UI } from "../models/UI.mjs";

// /**
//  *
//  * @param {Game} game the main game object
//  * @param {UI} ui ui object
//  */
// const renderPage = (game, ui) => {

//   if (game.idEnded()) {
//     let nombre = sessionStorage.getItem("name");
//     let player = new Player(nombre);
//     player.saveScore(game.score);
//     ui.showScores(game.score)
//   } else {
//     ui.showQuestion(game.getQuestionIndex().text);
//     ui.showOptions(game.getQuestionIndex().options, (currentOption) => {
//       game.guess(currentOption);
//       renderPage(game, ui);
//     });
//     ui.showProgress(game.questionIndex + 1, game.questions.length);
//     ui.showActualScore(game.score);
//     ui.showLevel(game.questionIndex + 1)
//   }
// };

// document.getElementById("salir").addEventListener("click", () => {
//   redirection(gameLocalHost, rankingLocalHost, rankingGithub)
// });


// function main() {
//   const game = new Game(random());
//   const ui = new UI();
//   renderPage(game, ui);
  
// }


// main();




console.log("funciona")



