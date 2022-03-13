<script>
  import leaderboard from "../../SVG/LeaderBoard.svg";
  import discord from "../../SVG/discord.svg";
  import game from "../../SVG/game.svg";
</script>

<svelte:head>
  <title>Portal</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex justify-center items-center">
    <div class="flex items flex-col text-center">
      <a class="link" sveltekit:prefetch href="/game/leaderboard">
        <img src={leaderboard} class="img drop-shadow-2xl flex" alt="logo" />
      </a>
      <br />
      <h1 class="text-white text-2xl">LeaderBoard</h1>
    </div>
    <div class="flex items flex-col text-center">
      <a class="link" sveltekit:prefetch href="/game/game">
        <img src={game} class="img drop-shadow-2xl flex" alt="logo" />
      </a>
      <br />
      <h1 class="text-white text-2xl">Game</h1>
    </div>
    <div class="flex items flex-col text-center">
      <a class="link" sveltekit:prefetch href="/game/discord">
        <img src={discord} class="img drop-shadow-2xl flex" alt="logo" />
      </a>
      <br />
      <h1 class="text-white text-2xl">Discord</h1>
    </div>
  </div>
</div>

<style>
  .back {
    background-color: #272727;
  }
  .img {
    width: 10rem;
    height: 10rem;
  }
  .items {
    margin: 10rem;
  }
</style>
