// @ts-check
export class Player {

    /**
     * 
     * @param {string} name name of the player
     */
    constructor(name){
        this.name = name;
    }

    /**
     * 
     * @param {number} score the final score of the player
     */
    saveScore(score) {

        if(localStorage.getItem('puntuaciones') === null) {
            const arr = [];
            localStorage.setItem('puntuaciones', JSON.stringify(arr))
        }

        let arrPuntuaciones = JSON.parse(localStorage.getItem('puntuaciones'));

        const player = {
                name: this.name,
                score: score,
            }
            
        arrPuntuaciones.push(player)

        localStorage.setItem('puntuaciones', JSON.stringify(arrPuntuaciones))
    }
}