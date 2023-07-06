<script lang="ts">
  import Nested from './Nested.svelte';
  let name = 'Svelte';
  let string = 'this string contains a <strong>strong HTML</strong>'
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
<Nested />
<p>{@html string}</p>