document.getElementById("btnJugar").addEventListener("click", function() {
    redirection(rankingLocalHost, gameLocalHost, gameGithub)
  })
document.getElementById("btnSalir").addEventListener("click", function() {
redirection(rankingLocalHost, indexLocalHost, indexGithub)
})

function mostarTabla(){
    const tabla = JSON.parse(localStorage.getItem("puntuaciones"));

    if(tabla != null) {
        const tablaOrdenada = tabla.sort(function(a, b){return a.score<b.score});
        const tablaDOM = document.getElementById("tabla");
        let contentHTML = "";

        for(i = 0; i < tablaOrdenada.length; i++) {
            contentHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${tablaOrdenada[i].name}</td>
                <td>${tablaOrdenada[i].score}</td>
            </tr>
        
            `
        }
        
        tablaDOM.innerHTML += contentHTML;
    } 

}

mostarTabla()








