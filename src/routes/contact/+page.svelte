<script lang="ts">
	import type { ActionData, SubmitFunction } from './$types';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
    done: string; // Success message from server
  }

	export let form: ActionData & { data: ContactFormData };
  let submitting = false;

	const handleForm: SubmitFunction = async ({
		formElement,
		formData,
		action,
		cancel,
		submitter
	}) => {
		return async ({ result }) => {
      submitting = true;
			if (result.type === 'success') {
				await invalidateAll();
			}

			await applyAction(result);
      submitting = false;
		};
	};

	$: console.log('form', form);
</script>

{#if form?.type === 'success'}
  <div class="">
    <p>{form.data.done}</p>
  </div>
{:else}
  <form class="contact-form" use:enhance={handleForm} method="POST" action="?/email">
    <div class="form-group">
      <label for="name">Name</label>
      <input value={form?.data?.name ?? ''} required type="text" name="name" placeholder="Full Name" />
      {#if form?.errors?.name}
        <label class="error-label" for="name">{form.errors.name}</label>
      {/if}
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input value={form?.data?.email ?? ''} required type="email" name="email" placeholder="someone@example.com" />
      {#if form?.errors?.email}
        <label class="error-label" for="email">{form.errors.email}</label>
      {/if}
    </div>
    <div class="form-group form-group--full-width">
      <label for="message">Message</label>
      <textarea value={form?.data?.message ?? ''} required name="message" rows="6" placeholder="What can I help you with..." />
      {#if form?.errors?.message}
        <label class="error-label" for="message">{form.errors.message}</label>
      {/if}
    </div>
    <button class="btn-primary" type="submit" disabled={submitting}>Send Message</button>
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
