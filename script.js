const divContador = document.querySelector("#contador");
const ball = document.querySelector("#ball");
const result = document.querySelector("#result");
const button = document.querySelector("#buttonStart");
const form = document.querySelector("#form");
const inputTempo = document.querySelector("#tempo");

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
  const pontos = timeNow - initialTime;
  result.innerHTML = `Seu score foi de ${pontos}ms`;
  contador = 0;
  button.classList.remove("d-none");
  ball.classList.remove("green");
  ball.classList.add("gray");
  form.classList.remove("d-none");
  inputTempo.value = pontos;
}

console.log(JSON.parse(localStorage.getItem("leaderboard") || "[]"));
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = event.target.nome.value;
  const tempo = event.target.tempo.value;
  const email = event.target.email.value;
  const comentarios = event.target.comentarios.value;
  const idade = event.target.idade.value;
  const genero = event.target.genero.value;

  console.log(nome, tempo, email, comentarios, idade, genero);
  const score = {
    nome,
    tempo,
    email,
    comentarios,
    idade,
    genero,
  };
  const scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  scores.push(score);
  localStorage.setItem("leaderboard", JSON.stringify(scores));
});
