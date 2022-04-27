// @ts-check

// Github 
const indexGithub = "https://fabrikolof.github.io/SofkaU-Challenge-2022/index.html";
const gameGithub = "https://fabrikolof.github.io/SofkaU-Challenge-2022/game.html"
const rankingGithub = "https://fabrikolof.github.io/SofkaU-Challenge-2022/ranking.html";
// LocalHost
const indexLocalHost = "http://127.0.0.1:5500/index.html";
const gameLocalHost = "http://127.0.0.1:5500/game.html"
const rankingLocalHost = "http://127.0.0.1:5500/ranking.html";


// Check if we are in the localhost, if not it redirect to the github page
/**
 * 
 * @param {string} currentLocalhost the url of the localhost of the current page
 * @param {string} reLocalhost the url of the page for being redirected in the localhost
 * @param {string} reGithub the url of the page but from the github page
 */
function redirection(currentLocalhost, reLocalhost, reGithub) {
    if(window.location.href === currentLocalhost) {
      window.location.href = reLocalhost;
    } else {
      window.location.href = reGithub;
    }
}