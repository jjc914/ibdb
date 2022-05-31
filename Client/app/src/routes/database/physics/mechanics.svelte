<script lang="ts">
    import { user, isLoggedIn } from '../../../stores/authStore'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons' 
    import { mechanics, physicsConstLink } from '../../../Lib/Question/physics'
 </script>
 
 <svelte:head>
   <title>mechanics</title>
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
     width: 80rem;
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
       <img src="{physicsConstLink + mechanics[0]}" class="ans">
   </div>
   <div class="pair">
       <img src="{physicsConstLink + mechanics[1]}" class="ans">
   </div>
   <div class="pair">
       <img src="{physicsConstLink + mechanics[2]}" class="ans">
   </div>
   <div class="pair">
       <img src="{physicsConstLink + mechanics[3]}" class="ans">
   </div>
   <div class="pair">
       <img src="{physicsConstLink + mechanics[4]}" class="ans">
   </div>
   <div class="pair">
       <img src="{physicsConstLink + mechanics[5]}" class="ans">
   </div>
     <br />
   </div>
 
 