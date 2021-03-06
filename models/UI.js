export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} options the options of the question
     */
    showOptions(options, callback) {
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        for (let i = 0; i < options.length; i++) {
            const button = document.createElement("button");
            button.innerText = options[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(options[i]));

            optionsContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} currentIndex the current index of the game
     * @param {number} total the total questions
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('rounds')
        element.innerHTML = `Ronda ${currentIndex} de ${total}`
    }

    /**
     * 
     * @param {number} score the score of the game
     */
    showActualScore(score){
        document.getElementById("score").innerText = `Score: ${score}`
    }

    showLevel(level) {
        document.getElementById("level").innerText = `Nivel: ${level}`
    }

    /**
     * 
     * @param {callback} callback the function from the main object game where complete all the index of it to end it
     */
    showBtnEndGameByIndex(callback) {
        const container = document.getElementById('rankingDiv');
        const button = document.createElement('button');
        button.innerText = 'Salir';
        button.className = 'button';
        button.addEventListener('click', () => callback());
        container.innerHTML = "";
        container.append(button);
    }
}

