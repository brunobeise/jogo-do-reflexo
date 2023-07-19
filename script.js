const divContador = document.querySelector("#contador");
const ball = document.querySelector("#ball");
const result = document.querySelector("#result");
const button = document.querySelector("#buttonStart");

let intervalo;
let contador = 0;
let initialTime;

function verificarContador(sorteio) {
  if (sorteio <= contador) {
    console.log("chegou");
    pararContador();
    ball.classList.remove("red");
    ball.classList.add("green");
    initialTime = Date.now();
  }
}

function iniciarContador() {
  const sorteioContador = (Math.random() * 5 + 2).toFixed(2);
  ball.classList.remove("gray");
  ball.classList.add("red");
  button.classList.add("d-none");

  intervalo = setInterval(function () {
    contador += 0.01;
    verificarContador(sorteioContador);
  }, 10);
}

function pararContador() {
  clearInterval(intervalo);
}

function onClickBall() {
  if (ball.classList.contains("red")) {
    return;
  }
  const timeNow = Date.now();
  const diff = timeNow - initialTime;
  result.innerHTML = `Seu score foi de ${diff}ms`;
  contador = 0;
  button.classList.remove("d-none");
  ball.classList.remove("green");
  ball.classList.add("gray");
}
