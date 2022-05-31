<script lang="ts">
   import { user, isLoggedIn } from '../../../stores/authStore'
   import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons' 
   import { geoTrig, geoTrigAns } from '../../../Lib/Question/math'
import All from './all.svelte';
</script>

<svelte:head>
  <title>geoTrig</title>
</svelte:head>
<style>
 div {
    background-color: #272727;
 }
.pair {
    flex-direction: column; 
    flex-wrap: wrap;
    width: 20%;
    margin: 1rem;
    transition: all 0.2s ease-in-out;
   }
.pair:hover{
  transition: all 0.2s ease-in-out;
     width: 40%;
   }
   .ans {
     width: 50rem;
     border-radius: 0.4rem;
     margin: 1rem;

   }
   .back {
     background-color: #272727;
     display: flex;
     flex: row;
     flex-wrap: wrap;

  }
  .backpeepee {
    background-color: #373737;
  }
  * {
    font-family: 'Roboto', sans-serif;
    color: white;
  }
</style>

<div class="flex justify-center h-screen items-center back">
  <div class="pair">
      <img src="{geoTrig[0]}" class="ans">
      <img src="{geoTrigAns[0]}" class="ans">
  </div>
  <div class="pair">
    <img src="{geoTrig[1]}" class="ans">
    <img src="{geoTrigAns[1]}" class="ans">
</div>
    <br />
  </div>

