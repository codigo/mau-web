
<form class="contact-form" on:submit|preventDefault={() => {}} method="POST">
  <div class='form-group'>
    <label for="name">Name</label>
    <input required type="text" name="name" placeholder="Full Name"/>
  </div>
  <div class='form-group'>
    <label for="email">Email</label>
    <input required type="email" name="email" placeholder="someone@example.com"/>
  </div>
  <div class='form-group form-group--full-width'>
    <label for="message">Message</label>
    <textarea required name="message" rows="6" placeholder="What can I help you with..."/>
  </div>
  <button class="btn-primary" type="submit">Send Message</button>
</form>


<style>

  .contact-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    width: calc(var(--max-width)/2);
    justify-content: stretch;
  }

  .form-group {
    display: grid;
    gap: 0.8rem;
  }

  .form-group--full-width {
    grid-column: 1 / -1;
  }

</style>
