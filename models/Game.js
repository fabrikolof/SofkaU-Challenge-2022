// @ts-check
import { Question } from './Questions.js'

export class Game {

    questionIndex = 0
    score = 0
    scorePoints = [100, 400, 600, 1200, 2000]
    
    /**
     * 
     * @param {Array} arrayQuestions Array of questions that are objects
     */
    constructor(arrayQuestions){
        this.questions = arrayQuestions;
    }
    
    /**
     * 
     * @returns {Question} the question found
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    /**
     * 
     * @returns boolean
     */
    idEnded() {
        return this.questions.length === this.questionIndex
    }

    endTheGame() {
        this.questions.length === this.questionIndex - 1
    }

    endTheGameByPlayer() {
        console.log(this.questionIndex)
        this.questionIndex = this.questions.length - 1;
        console.log(this.questionIndex)
    }

    /**
     * 
     * @param {string} answer The guess of the question
     */
    guess(answer) {
        console.log(this.getQuestionIndex().correctAnswer(answer))
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score += this.scorePoints[this.questionIndex];
            
        } else {
            // @ts-ignore
            swal({
                title: "Game Over!",
                text: "Juega de nuevo para mejorar la puntuación",
                icon: "warning",
                button: "Salir!",
                dangerMode: true,
              }).then(function () {
                // @ts-ignore
                window.location = "./game.html";
              });
        }
        this.questionIndex++ 
        
    }

}

