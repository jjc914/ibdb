<script lang="ts">
  import test from "../../Lib/SVG/test.png";
  import { correct, wrong } from "../../stores/authStore";
  import { allQuestions } from "../../Lib/Question/physics";
  import { physicsConstLink } from "../../Lib/Question/physics";
  import { onMount } from "svelte";

  let question: string = "";
  let ans: string = "";
  onMount(async () => {
    let index = Math.floor(Math.random() * allQuestions.length);
    question = physicsConstLink + allQuestions[index];
    console.log(question);
    let temp = question.slice(-5);
    ans = temp.charAt(0).toLocaleLowerCase();

    console.log(ans);
  });
  function ansA() {
    if (ans == "a") {
      alert("Ans was right");
      correct.update((n) => n + 1);
    } else {
      alert("Ans was wrong");
      wrong.update((n) => n + 1);
    }
  }
  function ansB() {
    if (ans == "b") {
      alert("Ans was right");
      correct.update((n) => n + 1);
    } else {
      alert("Ans was wrong");
      wrong.update((n) => n + 1);
    }
  }
  function ansC() {
    if (ans == "c") {
      alert("Ans was right");
      correct.update((n) => n + 1);
    } else {
      alert("Ans was wrong");
      wrong.update((n) => n + 1);
    }
  }
  function ansD() {
    if (ans == "d") {
      alert("Ans was right");
      correct.update((n) => +1);
    } else {
      alert("Ans was wrong");
      wrong.update((n) => +1);
    }
  }
</script>

<svelte:head>
  <title>index</title>
</svelte:head>

<div class="flex justify-center items-center h-screen back">
  <div class="score">
    <h1>
      <strong style="color: rgb(0,225,0);">Correct: </strong>{$correct}
      <strong style="color: red;">Wrong: </strong>{$wrong}
    </h1>
  </div>
  <div
    class="flex flex-col border-2 backpeepee p-5 m-10 rounded-3xl drop-shadow-2xl"
  >
    <h1 class="text-2xl float-left">Question:</h1>
    <br />
    <img src={question} alt="question" class="rounded-xl question" />
    <br />
    <div
      class="flex w-3/4 space-x-4 m-auto object-center text-center
      content-center flex-row"
    >
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">A</h1>
        <button on:click={ansA}>
          <div class="ans" />
        </button>
      </div>
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">B</h1>
        <button on:click={ansB}>
          <div class="ans" />
        </button>
      </div>
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">C</h1>
        <button on:click={ansC}>
          <div class="ans" />
        </button>
      </div>
      <div class="flex flex-col ansl">
        <h1 class="text-xl text-center">D</h1>
        <button on:click={ansD}>
          <div class="ans" />
        </button>
      </div>
    </div>
    <br />
  </div>
</div>

<style>
  .ans {
    width: 3rem;
    height: 3rem;
    border-radius: 0.4rem;
    background-color: #c4c4c4;
    margin: auto;
  }
  .ans:hover {
    background-color: #889afd;
  }
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #373737;
  }
  * {
    font-family: "Roboto", sans-serif;
    color: white;
  }
  .ansl {
    width: 32%;
  }
  .question {
    width: 60vw;
    max-height: 60vh;
  }
  .score {
    position: absolute;
    text-align: center;
    font-size: 2rem;
    top: 2rem;
  }
</style>
