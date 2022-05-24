<script lang="ts">
    import { user, isLoggedIn } from '../../../stores/authStore'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons' 
    import { allQuestions, allQuestionsAns } from '../../../Lib/Question/math'
 import All from './all.svelte';
 </script>
 
 <svelte:head>
   <title>allQuestions</title>
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
 
 <div class="flex justify-center items-center back">
   <div class="pair">
       <img src="{allQuestions[0]}" class="ans">
       <img src="{allQuestionsAns[0]}" class="ans">
   </div>
   <div class="pair">
     <img src="{allQuestions[1]}" class="ans">
     <img src="{allQuestionsAns[1]}" class="ans">
 </div>
 <div class="pair">
    <img src="{allQuestions[2]}" class="ans">
    <img src="{allQuestionsAns[2]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[3]}" class="ans">
    <img src="{allQuestionsAns[3]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[4]}" class="ans">
    <img src="{allQuestionsAns[4]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[5]}" class="ans">
    <img src="{allQuestionsAns[5]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[6]}" class="ans">
    <img src="{allQuestionsAns[6]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[7]}" class="ans">
    <img src="{allQuestionsAns[7]}" class="ans">
</div>
<div class="pair">
    <img src="{allQuestions[8]}" class="ans">
    <img src="{allQuestionsAns[8]}" class="ans">
</div>
     <br />
   </div>
 
 