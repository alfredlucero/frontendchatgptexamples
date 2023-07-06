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