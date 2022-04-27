import { Question } from "/models/Questions.mjs"
import { data } from "./data.mjs"

const dataMaped = data.map(question => new Question(question.category, question.question, question.options, question.answer, question.difficulty))

export let random = () => {
    let questionArray = [];
    const nivelOne = dataMaped.filter(question => question.difficulty === 'level 1');
    const nivelTwo = dataMaped.filter(question => question.difficulty === 'level 2');
    const nivelThree = dataMaped.filter(question => question.difficulty === 'level 3');
    const nivelFour = dataMaped.filter(question => question.difficulty === 'level 4');
    const nivelFive = dataMaped.filter(question => question.difficulty === 'level 5');
    
    questionArray.push(nivelOne[Math.floor(Math.random() * 5)])
    questionArray.push(nivelTwo[Math.floor(Math.random() * 5)])
    questionArray.push(nivelThree[Math.floor(Math.random() * 5)])
    questionArray.push(nivelFour[Math.floor(Math.random() * 5)])
    questionArray.push(nivelFive[Math.floor(Math.random() * 5)])
    
    return questionArray
}


