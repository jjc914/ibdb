<script lang="ts">
  import { app } from '../Lib/Firestore/firestoreSetup'
  import firebase from 'firebase/app'
  import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
  } from 'firebase/auth'

  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  function signIn() {
    // signInWithRedirect(auth, provider)
    window.open('http://localhost:3000/account')
  }

  function signOut() {
    auth.signOut()
  }
</script>

<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #ffffff;
  }
  .signout {
    background-color: #fffaaf;
    color: #272727;
    position: absolute;
    right: 0;
    z-index: 1;
    top: 0;
    margin: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
  }
</style>

<svelte:head>
  <title>index</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <button class="signout" on:click={() => signOut()}>Sign Out</button>

  <button on:click={() => signIn()}>
    <div
      class="flex backpeepee p-3 rounded-3xl shadow-lg border-2 hover:border-4
      shadow-lg duration-750 ease-in-out transition hover:scale-105
      drop-shadow-2xl">
      <img
        src="https://img.icons8.com/fluency-systems-filled/96/000000/google-logo.png"
        alt="google icon" />
      <!-- <a class="link" sveltekit:prefetch href="/login"> -->
      <p class="justify-center content-center p-8 text-xl">
        Sign into google here
      </p>
    </div>
  </button>
  <!-- </a> -->
</div>
