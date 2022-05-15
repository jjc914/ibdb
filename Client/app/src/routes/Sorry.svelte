<script>
  import { user, isLoggedIn } from '../stores/authStore'
  // i know this is shit way of doing it but doing it in layout was hurting my soul and making a recursive loop so fuck you
</script>

<style>
  .back {
    background-color: #272727;
  }
  .blober {
    background: #ff7979;
    width: 50vw;
    color: #f0f0f0;
    padding: 3rem;
  }
  .buttons {
    color: #ff7979;
  }
</style>

<svelte:head>
  <title>Sorry</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
  <div class=" rounded-3xl drop-shadow-2xl blober">
    <h1 class="text-5xl font-bold">Sorry......</h1>
    <br />
    <h1 class="text-xl font-bold">You are not allowed to access this page</h1>
    <p>
      A .edu gmail account to use this service in. The IB does not let past
      paper and practice questions to be used at non-licensed institutions. If
      you do have and .edu account, we apiologies for not supporting your
      school. Please ask your school admin to email us or click the button to
      speak to use directly.
    </p>
    <br />
    <h1 class="text-center text-xl font-medium">
      We apiologies for any inconvenience
    </h1>
    <br />
    <div class="text-center">
     <a href="mailto:sdo244@student.cis.edu.hk">
     <div
        class="bg-white hover:bg-slate-100 text-xl text-white py-2 px-4
        rounded-xl buttons">
        Email Us
    </div>
    
    </a>
    </div>
  </div>
</div>
