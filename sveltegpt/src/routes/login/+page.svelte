<script>
  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

{#if form?.success}
  <!-- Message is ephemeral and exists beacuse page was rendered in response to a form submission. It will vanish if user reloads -->
  <p>Successfully logged in! Welcome back {data.user}!</p>
{/if}

<form method="POST" action="?/login">
  <label for="email">
    Email
    <input name="email" type="email" />
  </label>
  <label for="password">
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>