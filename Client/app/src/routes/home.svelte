<script lang="ts">
  import logo from '../lib/SVG/database.svg'
  import game from '../lib/SVG/game.svg'
  import { user, isLoggedIn } from '../stores/authStore'
  if (typeof window !== 'undefined') {
    if ($isLoggedIn === false) {
      window.location.replace('/')
    }
  }
</script>

<style>
  .back {
    background-color: #272727;
    height: 100vh;
    width: 100vw;
  }
  .backpeepee {
    background-color: #f0f0f0;
  }
  .logo {
    width: 20vw;
    text-align: center;
    margin: auto;
  }
  .one {
    width: 50vw;
    background-color: #272727;
    transition-duration: 1000ms;
  }
  .two {
    width: 50vw;
    transition-duration: 1000ms;
  }
</style>

<svelte:head>
  <title>home</title>
</svelte:head>
<div class="back flex justify-center items-center m-auto">
  <div class="flex one flex-col text-center">
    <a class="link" sveltekit:prefetch href="/database">
      <img src={logo} class="logo drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">Database</h1>
  </div>
  <div class="flex two flex-col text-center">
    <a class="link" sveltekit:prefetch href="/game">
      <img src={game} class="logo drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">Game</h1>
  </div>
</div>
