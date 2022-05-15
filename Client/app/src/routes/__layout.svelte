<script lang="ts">
  import '../app.css'
  import logo from '../Lib/SVG/database.svg'
  import { user, isLoggedIn } from '../stores/authStore'

  function signOut() {
    user.update(n => null)
    isLoggedIn.update(n => false)
    window.location.href = "/"
  }
</script>

<style>
  .logo {
    position: absolute;
    padding: 1rem;
    padding-left: 2rem;
    width: 10vw;
  }
  
  .signout {
    background-color: #fffaaf;
    color: #272727;
    position: absolute;
    right: 0;
    z-index: 1;
    top: 0;
    margin: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    transition-duration: 1000ms;
  }
</style>

<a href="/home">
<img src="{logo}" class="logo duration-750 ease-in-out transition hover:scale-110" alt="logo"><img>
</a>
<button
class="signout shadow-lg duration-750 ease-in-out transition hover:scale-110"
on:click={() => signOut()}>
Sign Out
</button>
<slot />
