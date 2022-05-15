<script lang="ts">
  import '../app.css'
  import { page } from '$app/stores'
  import logo from '../Lib/SVG/database.svg'
  import { user, isLoggedIn } from '../stores/authStore'
</script>

<style>
  ul {
    position: absolute;
    top: 0;
    right: 0;
    height: 3em;
    display: flex;
    list-style: none;
    border-radius: 0.5rem;
    padding: 2vw;
    margin-right: 3vw;
  }
  li {
    list-style: none;
  }
  .logo {
    position: absolute;
    top: 0;
    width: 3rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .link {
    bottom: 0;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    background-color: transparent;
  }
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
  .head {
    background-color: #272727;
    color: rgb(27, 27, 27);
    text-align: center;
  }
  .top {
    position: absolute;
    top: 1rem;
    left: 45%;
  }
</style>

{#if $isLoggedIn === false}
  <div class="head">
    <a href="/">
      <h1
        class="top p-2 bg-slate-100 rounded-xl justify-center duration-750
        ease-in-out transition hover:scale-110 ">
        Please sign in
      </h1>
    </a>
  </div>
{/if}
{#if $isLoggedIn === true}
  <script>
    $user = user
  </script>
{/if}
<slot />
