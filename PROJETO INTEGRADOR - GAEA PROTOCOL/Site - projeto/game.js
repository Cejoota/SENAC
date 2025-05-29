document.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("battle-log");
  log.innerHTML += "<div class='text-green-400'>> Protocolo GÆA iniciado.</div>";
  drawCards();
});

function startTurn() {
  const energyEl = document.getElementById("player-energy");
  const log = document.getElementById("battle-log");
  let newEnergy = Math.min(10, parseInt(energyEl.textContent) + 1);
  energyEl.textContent = newEnergy;
  log.innerHTML += `<div class='text-blue-400'>> Nova rodada iniciada. Energia +1 (${newEnergy})</div>`;
  drawCards();
  log.scrollTop = log.scrollHeight;
}

function drawCards() {
  const cardArea = document.getElementById("card-area");
  cardArea.innerHTML = "";

  const cards = [
    { name: "Ataque Solar", cost: 1, effect: "Causa 10 de dano", damage: 10 },
    { name: "Barreira Verde", cost: 1, effect: "Recupera 10 de vida", heal: 10 },
    { name: "Reciclagem", cost: 0, effect: "Ganha +1 energia", energy: 1 }
  ];

  cards.forEach(card => {
    const cardEl = document.createElement("button");
    cardEl.className = "bg-gray-700 text-white p-2 rounded hover:bg-gray-600";
    cardEl.innerHTML = `<strong>${card.name}</strong><br/><small>${card.effect}</small>`;
    cardEl.onclick = () => playCard(card);
    cardArea.appendChild(cardEl);
  });
}

function playCard(card) {
  const energyEl = document.getElementById("player-energy");
  let energy = parseInt(energyEl.textContent);
  if (energy < card.cost) {
    alert("Energia insuficiente!");
    return;
  }
  energy -= card.cost;
  energyEl.textContent = energy;

  const log = document.getElementById("battle-log");

  if (card.damage) {
    const enemy = document.getElementById("enemy-health");
    let hp = parseInt(enemy.textContent);
    hp = Math.max(0, hp - card.damage);
    enemy.textContent = hp;
    log.innerHTML += `<div class='text-red-400'>> ${card.name} causou ${card.damage} de dano!</div>`;
  }

  if (card.heal) {
    const player = document.getElementById("player-health");
    let hp = parseInt(player.textContent);
    hp = Math.min(100, hp + card.heal);
    player.textContent = hp;
    log.innerHTML += `<div class='text-green-400'>> ${card.name} curou ${card.heal} de vida!</div>`;
  }

  if (card.energy) {
    let newEnergy = Math.min(10, parseInt(energyEl.textContent) + card.energy);
    energyEl.textContent = newEnergy;
    log.innerHTML += `<div class='text-yellow-300'>> ${card.name} recuperou ${card.energy} de energia!</div>`;
  }

  log.scrollTop = log.scrollHeight;
}
