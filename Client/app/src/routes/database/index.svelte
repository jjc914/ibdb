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
  let leaderboard: boolean = false
  let shareAnswers: boolean = false
  let leaderAnon: boolean = false
  let pml: boolean = false

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
  button {
    background-color: #8c8f8a;
    color: #f0f0f0;
    width: 20vw;
    height: 10vw;
    margin: 1vw;
    border-radius: 1rem;
  }
  button:hover {
    background-color: #b3b6b1;
  }
</style>

<div class="flex justify-center items-center h-screen back">
  <div class="backpeepee w-3/4 p-6 rounded-3xl ">
    <div class="m-auto">

      <h1 class="bg-white text-xl text-cyan-500 text-center py-2 px-4 rounded ">
        Select your subjects
      </h1>
      <br />
      <div class=" w-full m-auto flex flex-wrap">
        <button>Math AA</button>
        <button>Math AI</button>
        <button>Physics</button>
        <button>Chemistry</button>
        <button>Biology</button>
        <button>Computer Science</button>
        <button>Economics</button>
        <button>Geography</button>
        <button>History</button>
        <button>Psychology</button>
        <button>English Lang Lit</button>
        <button>English Lit</button>
        <button>Chinese BA</button>
      </div>

    </div>
  </div>
</div>
