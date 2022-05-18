<script lang="ts">
    import { user, isLoggedIn } from '../../../stores/authStore'
   import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons' 
   import Carousel from '@beyonk/svelte-carousel'
    const questions : string[] = [ 
        "https://raw.githubusercontent.com/jjc914/ibdb/main/Server/DataProcessing/res/laq/qs/out/math/num%26alg/question0.png", 
        "https://raw.githubusercontent.com/jjc914/ibdb/main/Server/DataProcessing/res/laq/qs/out/math/num%26alg/question1.png",
        "https://raw.githubusercontent.com/jjc914/ibdb/main/Server/DataProcessing/res/laq/qs/out/math/num%26alg/question5.png",
        "https://raw.githubusercontent.com/jjc914/ibdb/main/Server/DataProcessing/res/laq/qs/out/math/num%26alg/question6.png",
        "https://raw.githubusercontent.com/jjc914/ibdb/main/Server/DataProcessing/res/laq/qs/out/math/num%26alg/question7.png"
    ]
    const ans: string[] = [
// TODO: josh i need the ans 
    ]

</script>

<svelte:head>
  <title>numbAndAlgo</title>
</svelte:head>
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
</style>

<div class="flex justify-center items-center h-screen back">
  <div
    class="flex flex-col border-2 backpeepee p-5 m-8 rounded-3xl drop-shadow-2xl">
  <Carousel>
      <div class="slide-content">
        <img src="{questions[0]}"/>
      </div>
</Carousel>
<Carousel>
      <div class="slide-content">
        <img src="{questions[1]}"/>
      </div>
</Carousel>


    </div>

    <br />
  </div>
