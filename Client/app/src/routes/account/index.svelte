<script lang="ts">
  let page: number = 0
  let mathAA: boolean = false
  let physics: boolean = false
  let englishLL: boolean = false
  let englishLit: boolean = false
  let mathAI: boolean = false
  let chineseB: boolean = false
  let chemistry: boolean = false
  let biology: boolean = false
  let cs: boolean = false
  let econ: boolean = false
  let geo: boolean = false
  let history: boolean = false
  let psychology: boolean = false
  let leaderboard: boolean = true
  let shareAnswers: boolean = true
  let leaderAnon: boolean = true
  let pml: boolean = true

  function next() {
    page++
    console.log(
      'mathAA: ' +
        mathAA +
        '\nphysics: ' +
        physics +
        '\nenglishLL: ' +
        englishLL +
        '\nenglishLit: ' +
        englishLit +
        '\nmathAI: ' +
        mathAI +
        '\nchineseB: ' +
        chineseB +
        '\nchemistry: ' +
        chemistry +
        '\nbiology: ' +
        biology +
        '\ncs: ' +
        cs +
        '\necon: ' +
        econ +
        '\ngeo: ' +
        geo +
        '\nhistory: ' +
        history +
        '\npsychology: ' +
        psychology,
    )
  }
  function sumbit() {
    window.open('http://localhost:3000/home')
  }
</script>

<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #f0f0f0;
  }
  .back2 {
    color: #272727;
  }
  input {
  }
  input:focus {
    outline: none;
  }
  form {
    margin: auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #272727;
  }
  input[type='checkbox'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    transition: 120ms transform ease-in-out;
    place-content: center;
  }

  input[type='checkbox']:checked {
    background-color: #fd8c88;
    border: 0.15em solid #fd8c88;
  }
</style>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="flex justify-center items-center h-screen back">
  <div class="backpeepee p-6 rounded-2xl ">
    <div class="m-auto">
      {#if page === 0}
        <h1
          class="bg-white text-xl text-green-500 text-center py-2 px-4 rounded ">
          Select your subjects
        </h1>
        <br />
        <form class="">
          <div class="flex flex-col">
            <label>
              <input type="checkbox" bind:checked={mathAA} />
              Math AA
            </label>
            <label>
              <input type="checkbox" bind:checked={mathAI} />
              Math AI
            </label>
            <label>
              <input type="checkbox" bind:checked={physics} />
              Physics
            </label>
            <label>
              <input type="checkbox" bind:checked={chemistry} />
              Chemistry
            </label>
            <label>
              <input type="checkbox" bind:checked={biology} />
              Biology
            </label>
            <label>
              <input type="checkbox" bind:checked={cs} />
              Computer Science
            </label>
            <label>
              <input type="checkbox" bind:checked={econ} />
              Economics
            </label>
            <label>
              <input type="checkbox" bind:checked={geo} />
              Geography
            </label>
            <label>
              <input type="checkbox" bind:checked={history} />
              History
            </label>
            <label>
              <input type="checkbox" bind:checked={psychology} />
              Psychology
            </label>
            <label>
              <input type="checkbox" bind:checked={englishLL} />
              English Lang Lit
            </label>
            <label>
              <input type="checkbox" bind:checked={englishLit} />
              English Lit
            </label>
            <label>
              <input type="checkbox" bind:checked={chineseB} />
              Chinese BA
            </label>
          </div>
        </form>
        <br />
        <button
          class="p-2 rounded-xl w-full text-center bg-green-500 text-white
          hover:bg-green-700"
          on:click|once={next}>
          Next
        </button>
      {/if}
      {#if page === 1}
        <h1
          class="bg-white text-xl text-red-500 text-center py-2 px-4 rounded ">
          Privacy 🔒
        </h1>
        <br />
        <form class="">
          <div class="flex flex-col">
            <label>
              <input type="checkbox" bind:checked={leaderboard} />
              Participate in leaderboard
            </label>
            <label>
              <input type="checkbox" bind:checked={shareAnswers} />
              Share correct and inccorent answers
            </label>
            <label>
              <input type="checkbox" bind:checked={leaderAnon} />
              Anonymous name on leaderboard
            </label>
            <label>
              <input type="checkbox" bind:checked={pml} />
              Allow for personalized ML
            </label>
          </div>
        </form>
        <br />
        <button
          class="p-2 rounded-xl w-full text-center bg-red-500 text-white
          hover:bg-red-700"
          on:click|once={sumbit}>
          Finish
        </button>
      {/if}
    </div>
  </div>
</div>
