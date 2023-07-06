<script lang="ts">
  import Nested from './Nested.svelte';
  let name = 'Svelte';
  let string = 'this string contains a <strong>strong HTML</strong>';
  let count = 0;
  // Re-run whenever any of the referenced values change
  $: doubled = count * 2;
  
  function increment() {
    count += 1;
  }

  const colors = ['red', 'orange', 'blue', 'yellow'];
</script>

<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>

<h1 data-name={name}>Hello {name}!</h1>

<p>Test paragraph</p>
<Nested answer={17}/>
<p>{@html string}</p>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>

{#if count > 10}
  <p>{count} is greater than 10</p>
{:else if count < 5}
  <p>{count} is less than 5</p>
{:else}
  <p>{count} is between 0 and 10</p>
{/if}

{#each colors as color, i (color)}
  <button
    style="background: {color}"
    aria-label={color}
  >
    {i+1}
  </button>
{/each}