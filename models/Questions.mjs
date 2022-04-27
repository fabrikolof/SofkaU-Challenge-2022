export class Question {
    /**
     * 
     * @param {string} category this is the category of the question
     * @param {string} text this is the text of the question
     * @param {string[]} options this are the options of the question
     * @param {string} answer this is the anwers of the question
     * @param {string} difficulty this is the level of difficulty
     */
    constructor(category, text, options, answer, difficulty) {
        this.category = category;
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    /**
     * 
     * @param {string} option some text to guess
     * @returns {boolean} return true if the anwers is correct
     */
    correctAnswer(option){
        return option === this.answer
    }
}
