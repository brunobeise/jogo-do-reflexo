const table = document.querySelector("#leaderboardList");

const scores = JSON.parse(localStorage.getItem("leaderboard") || "[]");
console.log(scores);

scores.forEach((score) => {
  table.innerHTML += `
    <tr>
       <td>${score.nome}</td>
       <td>${score.tempo}</td>
       <td>${score.comentarios}</td>
       <td>${score.idade}</td>
       <td>${score.genero}</td>
       <td>${score.email}</td>
     </tr>
     `;
});
