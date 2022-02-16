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
  <div class="flex backpeepee p-6 rounded-3xl ">
    <div class="m-auto">
      <h1 class="bg-white text-xl text-white py-2 px-4 rounded back2">
        Email Us
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
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username" />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full
            py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
            focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************" />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
