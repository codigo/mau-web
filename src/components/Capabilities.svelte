
<section class="section-capabilities b-border">

  <div class="capabilities-title">
    <h2>Capabilities</h2>
  </div>

  <div class="capabilities">
    <div class="capability">
      <div class="capability-icon">
        📐
      </div>
      <div class="capability-text">
        <h3>Systems Architecture</h3>
        <ul>
          <li>Scalability</li>
          <li>Performance</li>
          <li>Reliability</li>
          <li>Security</li>
        </ul>
      </div>
    </div>
    <div class="capability">
      <div class="capability-icon">
        🧑‍💻️
      </div>
      <div class="capability-text">
        <h3>Development</h3>
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Automated Testing</li>
          <li>Modbile Development</li>
        </ul>
      </div>
    </div>
    <div class="capability">
      <div class="capability-icon">
        🤝
      </div>
      <div class="capability-text">
        <h3>Collaboration</h3>
        <ul>
          <li>Agile Methodologies</li>
          <li>Team Leadership</li>
          <li>Code Quality</li>
          <li>Client Communication</li>
        </ul>
      </div>
    </div>
  </div>


</section>

<style>

  .section-capabilities {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem 0 6.4rem 0;
    margin-bottom: 4.8rem;

    gap: 6.4rem;
  }

  .capabilities {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }

  .capability {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.2rem;
    width: 30rem;
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

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    list-style-position: inside;
  }

  ul > li::marker {
    /* Add a custom marker for list with space */
    content: "\2713  ";
  }

</style>
