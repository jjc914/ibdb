<script lang="ts">
  import test from '../../SVG/test.png'
</script>

<style>
  .ans {
    width: 5vw;
    height: 5vw;
    border-radius: 0.4rem;
    background-color: #c4c4c4;
    margin: auto;
  }
  .ans:hover {
    background-color: #a3fd88;
  }
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #373737;
  }
  * {
    font-family: 'Roboto', sans-serif;
    color: white;
  }
  .ansl {
    width: 32%;
  }
</style>

<svelte:head>
  <title>index</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex flex-col backpeepee p-5 rounded-3xl drop-shadow-2xl">
    <h1 class="text-2xl float-left">Question:</h1>
    <br />
    <img src={test} alt="question" class="rounded-xl" />
    <br />
    <div
      class="flex w-full space-x-4 m-auto object-center text-center
      content-center flex-row">
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">A</h1>
        <button>
          <div class="ans" />
        </button>
      </div>
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">B</h1>
        <button>
          <div class="ans" />
        </button>
      </div>
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">C</h1>
        <button>
          <div class="ans" />
        </button>
      </div>

      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">D</h1>
        <button>
          <div class="ans" />
        </button>
      </div>

    </div>

    <br />
  </div>
</div>
