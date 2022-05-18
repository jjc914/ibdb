<script>
  import leaderboard from '../../Lib/SVG/LeaderBoard.svg'
  import discord from '../../Lib/SVG/discord.svg'
  import game from '../../Lib/SVG/game.svg'
  import { user, isLoggedIn } from '../../stores/authStore'
  
</script>

<style>
  .back {
    background-color: #272727;
  }
  .img {
    width: 10vw;
    height: 10vw;
    justify-content: center;
    margin: auto;
    transition-duration: 1000ms;
  }
  .items {
    margin: 10vw;
    transition-duration: 1000ms;
  }
</style>

<svelte:head>
  <title>Portal</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90">
    <a class="link" sveltekit:prefetch href="/game/leaderboard">
      <img src={leaderboard} class="img drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">LeaderBoard</h1>
  </div>
  <div class="flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90">
    <a class="link" sveltekit:prefetch href="/game/topic">
      <img src={game} class="img drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">Game</h1>
  </div>
  <div class="flex items flex-col text-center duration-750 ease-in-out transition hover:scale-90">
    <a class="link" sveltekit:prefetch href="/game/discord">
      <img src={discord} class="img drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">Discord</h1>
  </div>

</div>
