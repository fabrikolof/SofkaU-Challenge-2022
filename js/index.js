let validator = true;

// Redirections
document.getElementById("ranking").addEventListener("click", () => {
  console.log(window.location.href)
  redirection(indexLocalHost, rankingLocalHost, rankingGithub)
})

// Animation index with the play button

//imagen de fondo
//background-image: url("https://www.sofka.com.co/wp-content/uploads/2021/04/INTERNA-TEMA-5.jpg");
//<i class="fa-regular fa-house-heart"></i>
//<i class="fa-regular fa-heart"></i>
document.getElementById("img").addEventListener("mouseover", () => {
  document
  .getElementById("happy")
  .setAttribute(
    "class",
    "fa-regular fa-heart animate__animated animate__heartBeat",
    )
    .setAttribute(
    "color",
    "red",
    );
});

 document.getElementById("ranking").addEventListener("mouseover", () => {
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
      "fa-regular fa-face-grin-wink animate__animated animate__flash"
    );
});

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
    loveFace()
    inputNombre()
  });

async function inputNombre(){
  let { value: name } = await Swal.fire({
      title: 'Comienza una gran aventura!',
      input: 'text',
      inputLabel: 'Escribe tu nombre',
      inputPlaceholder: 'Nombre...'
    })
    
    if (name != "") {
      sessionStorage.setItem("name", name)
      redirection(indexLocalHost, gameLocalHost, gameGithub)
    }

    validator = false;
}


