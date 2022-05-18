<script lang="ts">

      
</script>

<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #3d3c3c;
  }
  .back2 {
    color: #272727;
  }
  p {
    display: flex;
    text-align: center;
    margin: auto;
  }
  a {
    background-color: #707070;
    color: #f0f0f0;
    width: 20vw;
    height: 10vw;
    display: flex;
    margin: 1vw;
    border-radius: 1rem;
  }
  a:hover {
    background-color: #b3b6b1;
  }
</style>

<div class="flex justify-center items-center h-screen back">
  <div class="backpeepee w-3/4 p-6 rounded-3xl ">
    <div class="m-auto">

      <h1
        class="text-xl text-white text-center py-2 px-4 rounded-3xl
        bg-neutral-600">
        Select your subject
      </h1>
      <br />
      <div
        class=" w-full m-auto items-center flex text-center justify-center
        flex-wrap">
        <a style="background-color: #0f92c6" sveltekit:prefetch href="/game/physicsGame">
          <p>Physics</p>
        </a>
        <a href="">
          <p>Chemistry (Coming Soon)</p>
        </a>
        <a href="">
          <p>Biology (Coming Soon)</p>
        </a>
      
      </div>

    </div>
  </div>
</div>
