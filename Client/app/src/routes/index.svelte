<script lang="ts">
  import { app } from '../Lib/Firestore/firestoreSetup'
  import firebase from 'firebase/app'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
  import { user, isLoggedIn } from '../stores/authStore'
  import {SyncLoader } from "svelte-loading-spinners"
  // import { saveUser } from '../Lib../Lib/Firestore/usernst'
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  console.log($isLoggedIn)
   function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        user.set(result.user)
        isLoggedIn.set(true)
        console.log($isLoggedIn)
        console.log($user.email)
        if($user.email.includes(".edu"))
          window.location.href = "/home"
        else
          window.location.href = '/Sorry'
        //sign user into db
      })
      .catch((error) => {
        console.log('Someting wrong')
        console.error(error)
      })
  }
</script>

<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #ffffff;
  }
  
</style>

<svelte:head>
  <title>index</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
    {#if loading = true}
    <button on:click={() => signIn()}>
    <div
      class="flex backpeepee p-3 rounded-3xl shadow-lg border-2 hover:border-4
      shadow-lg duration-750 ease-in-out transition hover:scale-105
      drop-shadow-2xl">
      <img
        src="https://img.icons8.com/fluency-systems-filled/96/000000/google-logo.png"
        alt="google icon" />
      <!-- <a class="link" sveltekit:prefetch href="/login"> -->
      <p class="justify-center content-center p-8 text-xl ">
        Sign into google here
      </p>
    
    </div>
  </button>
  {/if}
  <!-- </a> -->
  {#if loading = false} 
  <SyncLoader  size="10" color="white" unit="vw"></SyncLoader>
  {/if}
</div>
