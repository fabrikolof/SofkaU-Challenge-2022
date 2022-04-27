// Redirections
document.getElementById("play").addEventListener("click", () => {
  redirection(indexLocalHost, gameLocalHost, gameGithub)
})

document.getElementById("ranking").addEventListener("click", () => {
  console.log(window.location.href)
  redirection(indexLocalHost, rankingLocalHost, rankingGithub)
})


/**
 // Animation index with the play button
 document.getElementById("testplay").addEventListener("mouseover", () => {
   document
   .getElementById("play")
   .setAttribute(
     "class",
     "fa-regular fa-circle-play play animate__animated animate__heartBeat"
     );
     document
     .getElementById("happy")
     .setAttribute(
       "class",
       "fa-regular fa-face-grin-stars animate__animated animate__shakeY"
       );
      });
      
      document.getElementById("testplay").addEventListener("mouseout", () => {
        document
        .getElementById("play")
        .setAttribute("class", "fa-regular fa-circle-play play");
        happyFace();
      });
      
      function happyFace() {
        if (validator === true) {
          document
          .getElementById("happy")
          .setAttribute(
            "class",
            "fa-regular fa-face-sad-cry animate__animated animate__shakeX"
            );
          }
        }
        
        function loveFace() {
          document
          .getElementById("happy")
          .setAttribute(
            "class",
            "fa-regular fa-face-grin-hearts animate__animated animate__heartBeat"
            );
          }

          document.getElementById("testplay").addEventListener("click", () => {
            // document
            //   .getElementById("happy")
            //   .setAttribute(
              //     "class",
              //     "fa-regular fa-face-grin-hearts animate__animated animate__heartBeat"
              //   );
              loveFace()
              inputNombre()
            });
            
*/


// async function inputNombre(){
//   let { value: name } = await Swal.fire({
//       title: 'Comienza una gran aventura!',
//       input: 'text',
//       inputLabel: 'Escribe tu nombre',
//       inputPlaceholder: 'Nombre...'
//     })
    
//     if (name) {
//       sessionStorage.setItem("name", name)
//       //window.location.href = 'game.html'
//       window.location.href = "https://fabrikolof.github.io/Sofka-CHALLENGE-/game.html";
//     }
// }


// function inputNombre(){
//   let { value: name } = await Swal.fire({
//       title: 'Comienza una gran aventura!',
//       input: 'text',
//       inputLabel: 'Escribe tu nombre',
//       inputPlaceholder: 'Nombre...'
//     })
//     if (name) {
//       sessionStorage.setItem("name", name)
//       //window.location.href = 'game.html'
//       window.location.href = "../game.html";
//     }
// }

//A continuacion una funcion cuando no contestas ninguna pregunta,
// si obtienes cero no entras a la tabla de puntuaciones

// function retreat() {
//   if (points == 0) {
//     swal("Tienes Cero Punto, No entras A la tabla de puntiación, Adiós.").then(
//       function () {
//         window.location = "../index.html";
//       }
//     );
//     return;
//   }
//   nick = prompt(
//     " Saliste Del Juego, Obtuviste " +
//       points +
//       " Puntos!\n Escribe Aqui Tu nick"
//   );

//   writeDB(nick, points);
// }