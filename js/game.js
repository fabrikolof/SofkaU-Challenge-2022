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
    // the game ends
    savePlayerData(game, ui)
  } else {
    ui.showQuestion(game.getQuestionIndex().text);
    ui.showOptions(game.getQuestionIndex().options, (currentOption) => {
      game.guess(currentOption);
      renderPage(game, ui);
    });
    ui.showProgress(game.questionIndex + 1, game.questions.length);
    ui.showActualScore(game.score);
    ui.showLevel(game.questionIndex + 1)
    ui.showBtnEndGameByIndex( () => { 
      // El usuario se retira voluntaria mente
      savePlayerData(game, ui)
    });
  }
};

function savePlayerData(game, ui) {
  if(game.score > 0) {
    let nombre = sessionStorage.getItem("name");
    let player = new Player(nombre);
    player.saveScore(game.score);

    // @ts-ignore
    swal({
      title: "Fin del juego!",
      text: "Tu puntuación es de: " + game.score,
      icon: "success",
      button: "Salir!",
      dangerMode: true,
    }).then(function () {
      // @ts-ignore
      redirection(gameLocalHost, rankingLocalHost, rankingGithub);
    });
    
  } else {
    // @ts-ignore
    swal({
      title: "Game Over!",
      text: "Tu puntuación no es suficiente para entrar al ranking",
      icon: "warning",
      button: "Salir!",
      dangerMode: true,
    }).then(function () {
      // @ts-ignore
      //redirección OK
      redirection(gameLocalHost, indexLocalHost, indexGithub);
    });
  }
}

function main() {
  const game = new Game(random());
  const ui = new UI();
  renderPage(game, ui);
  
}


main();

