import { getWinners, Winner } from "@/api/winners-api";

export default function renderWinnersView(container: HTMLElement): void {
  container.innerHTML = `
  <div class="winners-header">
    <h2 class="winners-title">Winners (<span id="winners-count">0</span>)</h2>
    <h3 class="winners-page">Page #<span id="winners-page">1</span></h3>
  </div>

    <div class="winners">
      <div class="winners-head">
        <ul class="winners-nav">
          <li class="winners-nav-item"><p>#</p></li>
          <li class="winners-nav-item"><p>Car ID</p></li>
          <li class="winners-nav-item"><p>Wins</p></li>
          <li class="winners-nav-item"><p>Best time (seconds)</p></li>
        </ul>
      </div>
      <div class="winners-body" id="winners-body">

        <h1>No winners to display.</h1>
      </div>
    </div>

  <div class="pagination">
    <button class="btn-effect" id="prev-winners">← Prev</button>
    <button class="btn-effect" id="next-winners">Next →</button>
  </div>
    `;
    setTimeout(() => renderWinners(), 0);
}


async function renderWinners() {
  const response = await getWinners(1, 10, 'id', 'ASC');
  const winners = response.winners;

  const winnersBody = document.getElementById('winners-body') as HTMLElement

  if (!winners) {
    return winnersBody
  }else{
    winnersBody.innerHTML = '';

    winners.forEach((winner: Winner, index: number) => {
      const winnersUl = document.createElement('ul');
      winnersUl.classList.add('car-item');
      winnersUl.innerHTML = `
        <ul class="winners-body-ul">
          <li class="winners-body-item"><p>${index + 1}</p></li>
          <li class="winners-body-item"><p>${winner.id}</p></li>
          <li class="winners-body-item"><p>${winner.wins}</p></li>
          <li class="winners-body-item"><p>${winner.time}</p></li>
        </ul>
      `;
      winnersBody.appendChild(winnersUl);
    });
  }
}
