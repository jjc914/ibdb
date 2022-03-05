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

