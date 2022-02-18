<style>
  .back {
    background-color: #272727;
  }
  .backpeepee {
    background-color: #f0f0f0;
  }
  .back2 {
    color: #272727;
  }
</style>

<svelte:head>
  <title>Login</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class="flex w-1/4 backpeepee p-6 rounded-3xl ">
    <div class="w-3/4 m-auto">
      <h1 class="bg-white text-xl text-center text-white py-2 px-4 rounded back2">
        Set your infromation
      </h1>
      <br />
      <img
        class="text-center border-4 border-blue-300 m-auto rounded-full"
        src="https://img.icons8.com/color/96/000000/donald-trump.png" />
      <br />
      <form>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username">
            Nickname
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="yourSexyNickname" />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            type="text">
		  Bio
          </label>
          <input
            class="shadow appearance-none rounded w-full
            py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
            focus:shadow-outline"
	    type="text">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline"
            type='submit'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
