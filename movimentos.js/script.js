function revelar() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function pergunta(pergunta) {
  var pergunta1 = document.querySelector("#cardContainer");
  pergunta1.innerHTML = "";

  var perguntaDiv = document.createElement("div");
  perguntaDiv.classList.add(
    "card",
    "animate__animated",
    "animate__backInRight"
  );

  perguntaDiv.innerHTML = `
<div class="card-superior centralizar">
  <h1 class="card-titulo"> O que é ${pergunta.title}?</h1>
</div>
<div id="resposta" class="card-resposta centralizar blur">
  <p>${pergunta.description}</p>
</div>`;
  pergunta1.appendChild(perguntaDiv);
}
function buscarInfo() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      pergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInfo);
