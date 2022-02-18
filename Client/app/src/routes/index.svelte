<script lang="ts">
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  const provider = new GoogleAuthProvider();

const auth = getAuth();

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
  <div class="flex backpeepee p-3 rounded-3xl shadow-lg border-green-500 border-0 hover:border-4 shadow-lg duration-500 ease-in-out transition hover:scale-105 drop-shadow-2xl">
    <img
      src="https://img.icons8.com/fluency-systems-filled/96/000000/google-logo.png" />
    <a class="link" sveltekit:prefetch href="/login">
      <p class="justify-center content-center p-8 text-xl">
        Sign into google here
      </p>
    </a>
  </div>
</div>
