<svelte:options tag="my-svelte-counter" />

<script>
  // 603 chars
  export let count = 0;
  function inc() {
    count++;
  }
</script>

<button on:click={inc}>
  Clicked {count} times
</button>

<style>
  button {
    color: #5c8012;
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 8px;
    margin: 8px;
    transition: box-shadow 0.4s ease;
    user-select: none;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.161);
  }
  button:focus {
    outline: none;
    border-color: black;
  }
</style>
