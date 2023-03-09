import './statistic.css';

export const Statistic = ({ statistic }) => {
  return (
    <section class="statistics">
      <h2 class="stat-title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{statistic[0].label} </span>
          <span class="percentage">{statistic[0].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{statistic[1].label}</span>
          <span class="percentage">{statistic[1].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{statistic[2].label}</span>
          <span class="percentage">{statistic[2].percentage}</span>
        </li>
        <li class="item">
          <span class="label">{statistic[3].label}</span>
          <span class="percentage">{statistic[3].percentage}</span>
        </li>
      </ul>
    </section>
  );
};
