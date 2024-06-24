
<section class="section-capabilities b-border">

  <div class="capabilities">
    <div class="capability">
      <div class="capability-icon">
        📐
      </div>
      <div class="capability-text">
        <h3>Systems Architecture</h3>
        <ul class="capability-list">
          <li class="capability-item">Scalability</li>
          <li class="capability-item">Performance</li>
          <li class="capability-item">Reliability</li>
          <li class="capability-item">Security</li>
        </ul>
      </div>
    </div>
    <div class="capability">
      <div class="capability-icon">
        🧑‍💻️
      </div>
      <div class="capability-text">
        <h3>Development</h3>
        <ul class="capability-list">
          <li class="capability-item">Frontend</li>
          <li class="capability-item">Backend</li>
          <li class="capability-item">Automated Testing</li>
          <li class="capability-item">Modbile Development</li>
        </ul>
      </div>
    </div>
    <div class="capability">
      <div class="capability-icon">
        🤝
      </div>
      <div class="capability-text">
        <h3>Developer Experience</h3>
        <ul class="capability-list">
          <li class="capability-item">Optimized Feedback Loops</li>
          <li class="capability-item">Reduced Cognitive Load</li>
          <li class="capability-item">Enhanced Flow State</li>
          <li class="capability-item">Improved Tooling and Processes</li>
        </ul>
      </div>
    </div>
  </div>


</section>

<style>

  .section-capabilities {
    padding: 1.6rem 0 4.8rem 0;
    margin-bottom: 2.4rem;
  }

  .capabilities {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4.4rem 0 4.4rem 0;
    column-gap: 3.6rem;
  }

  .capability {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.6rem;
    gap: 3.2rem;
  }

  .capability-icon {
    font-size: 6.4rem;
    padding: 1.6rem;
  }

  .capability-text {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .capability-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-left: 2rem;
    list-style-position: outside;
  }

  .capability-list > .capability-item::marker {
    /* Add a custom marker for list with space */
    content: "\2713  ";
  }

</style>
