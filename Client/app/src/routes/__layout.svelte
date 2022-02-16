<script lang="ts">
  import '../app.css'
  import { page } from '$app/stores'
  import logo from '../SVG/database.svg'
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
    position: absolute;
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
</style>

<slot />
<!-- <li class:active={$page.url.pathname === '/'}>
  <a class="link" sveltekit:prefetch href="/">index</a>
</li>
<li class:active={$page.url.pathname === '/Sorry'}>
  <a class="link" sveltekit:prefetch href="/Sorry">Sorry</a>
</li>
<li class:active={$page.url.pathname === '/login'}>
  <a class="link" sveltekit:prefetch href="/login">login</a>
</li>
<li class:active={$page.url.pathname === '/home'}>
  <a class="link" sveltekit:prefetch href="/home">home</a>
</li> -->
<div class:active={$page.url.pathname === '/home'}>
  <a class="link" sveltekit:prefetch href="/home">
    <img src={logo} class="logo" alt="logo" />
  </a>
</div>
