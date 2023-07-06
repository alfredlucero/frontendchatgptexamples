<svelte:head>
  <title>Login Page</title>
</svelte:head>

<script lang="ts">
  import type { PageData, ActionData } from './$types';
  export let data:PageData;

  export let form:ActionData;
</script>

{#if form?.success}
  <!-- Message is ephemeral and exists beacuse page was rendered in response to a form submission. It will vanish if user reloads -->
  <p>Successfully logged in! Welcome back {data.user}!</p>
{/if}

<form method="POST" action="?/login&redirectTo=/">
  {#if form?.missing}
    <p>Some fields are missing</p>
  {/if}
  <label for="email">
    Email
    <input id="email" name="email" type="email" value={form?.email ?? ''} />
  </label>
  <label for="password">
    Password
    <input id="password" name="password" type="password" />
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>