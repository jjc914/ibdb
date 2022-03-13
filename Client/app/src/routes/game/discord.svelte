<script type="ts">
  import discord from "../../SVG/discord.svg";
</script>

<svelte:head>
  <title>index</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex items flex-col text-center">
    <a class="link" sveltekit:prefetch href="/game/discord">
      <img src={discord} class="img drop-shadow-2xl flex" alt="logo" />
    </a>
    <br />
    <h1 class="text-white text-2xl">Discord</h1>
    <br />
    <h1 class="text-white">
      Still under development.
      <br /> Will be a discord bot which sends you an IB question daily
    </h1>
  </div>
</div>

<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #ffffff;
  }
  .img {
    width: 30vw;
  }
</style>
