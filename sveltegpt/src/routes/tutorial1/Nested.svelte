<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Hello!'
    });
  }
  export let answer = 0;


</script>

<p>Another nested component with answer: {answer}</p>
<button on:click={sayHello}>
  Click to say Hello
</button>