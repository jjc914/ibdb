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
    background-color: #3d3c3c;
  }
  .back2 {
    color: #272727;
  }
  p {
    display: flex;
    text-align: center;
    margin: auto;
  }
  a {
    background-color: #0f92c6;
    color: #f0f0f0;
    width: 20vw;
    height: 10vw;
    display: flex;
    margin: 1vw;
    border-radius: 1rem;
  }
  a:hover {
    background-color: #b3b6b1;
  }
</style>

<div class="flex justify-center items-center h-screen back">
  <div class="backpeepee w-3/4 p-6 rounded-3xl ">
    <div class="m-auto">

      <h1
        class="text-xl text-white text-center py-2 px-4 rounded-3xl
        bg-neutral-600">
        Select your subjects
      </h1>
      <br />
      <div
        class=" w-full m-auto items-center flex text-center justify-center
        flex-wrap">
        <a href="">
          <p>Math AA</p>
        </a>
        <a href="">
          <p>Math AI</p>
        </a>
        <a href="">
          <p>Physics</p>
        </a>
        <a href="">
          <p>Chemistry</p>
        </a>
        <a href="">
          <p>Biology</p>
        </a>
        <a href="">
          <p>Computer Science</p>
        </a>
        <a href="">
          <p>Economics</p>
        </a>
        <a href="">
          <p>Geography</p>
        </a>
        <a href="">
          <p>History</p>
        </a>
        <a href="">
          <p>Psychology</p>
        </a>
        <a href="">
          <p>English Lang Lit</p>
        </a>
        <a href="">
          <p>English Lit</p>
        </a>
        <a href="">
          <p>Chinese BA</p>
        </a>
      </div>

    </div>
  </div>
</div>
