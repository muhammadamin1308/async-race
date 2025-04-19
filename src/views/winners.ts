export default function renderWinnersView(container: HTMLElement): void {
  container.innerHTML = `
  <div class="winners-header">
    <h2 class="winners-title">Winners (<span id="winners-count">0</span>)</h2>
    <h3 class="winners-page">Page #<span id="winners-page">1</span></h3>
  </div>

  <table class="winners-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Car</th>
        <th>Name</th>
        <th id="sort-wins">Wins ⬍</th>
        <th id="sort-time">Best time (seconds) ⬍</th>
      </tr>
    </thead>
    <tbody id="winners-body"></tbody>
  </table>

  <div class="pagination">
    <button class="btn-effect" id="prev-winners">← Prev</button>
    <button class="btn-effect" id="next-winners">Next →</button>
  </div>
    `;
}
