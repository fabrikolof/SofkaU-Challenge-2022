let validator = true;

// Redirections
document.getElementById("ranking").addEventListener("click", () => {
  console.log(window.location.href)
  redirection(indexLocalHost, rankingLocalHost, rankingGithub)
})

// Animation index with the play button

//background img body and heart
document.getElementById("img").addEventListener("mouseover", () => {
  document
  .getElementById("happy")
  .setAttribute(
    "class",
    "fa-regular fa-heart animate__animated animate__heartBeat",
    );
    document.body.style.background = 'url(https://www.sofka.com.co/wp-content/uploads/2021/04/INTERNA-TEMA-5.jpg)';
});
  document.getElementById("img").addEventListener("mouseout", () => {
    document
    .getElementById("happy")
    .setAttribute(
      "class",
      "fa-regular fa-heart animate__animated animate__heartBeat",
      );
      document.body.style.background = '#272343';
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
  cryingFace();
});
      
function cryingFace() {
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
    validator = false;
    loveFace()
    inputNombre()
  });

async function inputNombre(){
  let { value: name } = await Swal.fire({
      allowOutsideClick: false,
      title: 'Comienza una gran aventura!',
      input: 'text',
      inputLabel: 'Escribe tu nombre',
      inputPlaceholder: 'Nombre...'
    })
    
    if (name != "") {
      sessionStorage.setItem("name", name)
      redirection(indexLocalHost, gameLocalHost, gameGithub)
    }

    validator = true;
}


