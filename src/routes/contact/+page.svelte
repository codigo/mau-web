<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters'

	import { ContactSchema } from '$routes/contact/schema';

  export let data;
  const { form, errors, constraints, message, enhance, submitting } = superForm(data.form, {
      customValidity: true,
      validators: zodClient(ContactSchema)
  });
</script>

{#if $message}
  <h3>{$message}</h3>
{:else}
<form class="pico contact-form" method="POST" action="?/email" use:enhance>
  <div class="form-group">
    <label for="name">Name</label>
    <input
      aria-invalid={$errors.name? 'true' : undefined}
      bind:value={$form.name}
      required
      type="text"
      name="name"
      placeholder="Full Name"
      {...$constraints.name}
    />
    {#if $errors?.name}
      <label class="error-label" for="name">{$errors.name}</label>
    {/if}
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      aria-invalid={$errors.email ? 'true' : undefined}
      bind:value={$form.email}
      required
      type="email"
      name="email"
      placeholder="someone@example.com"
      {...$constraints.email}
    />
    {#if $errors?.email}
      <label class="error-label" for="email">{$errors.email}</label>
    {/if}
  </div>
  <div class="form-group form-group--full-width">
    <label for="content">Message</label>
    <textarea
      aria-invalid={$errors.content ? 'true' : undefined}
      bind:value={$form.content}
      required
      name="content"
      rows="6"
      placeholder="What can I help you with..."
      {...$constraints.content}
    />
    {#if $errors?.content}
      <label class="error-label" for="content">{$errors.content}</label>
    {/if}
  </div>
  <button
    class="pico"
    type="submit"
    disabled={$submitting}
    aria-busy={$submitting}
  >
    Send Message
  </button>
</form>
{/if}


<style>

  .contact-form {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.4rem;
		width: calc(var(--max-width) / 2);
		justify-content: stretch;
	}

	.form-group {
		display: grid;
		gap: 0.8rem;
	}

	.form-group--full-width {
		grid-column: 1 / -1;
	}

  .error-label {
    color: var(--theme-font-danger);
  }

	@media (width <= 750px) {
		.contact-form {
			width: calc(var(--max-width) / 4);
		}
	}

</style>
