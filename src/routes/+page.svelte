<script lang="ts">
  import Music from '../components/Music.svelte';

  export let data;
</script>

<style>
  main {
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  img.flameline {
    position: fixed;
    bottom: 0;

    min-height: 30%;
    min-width: 0;
    z-index: 0;
  }

  h1 {
    color: red;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    font-size: 6rem;
    margin-bottom: 0;
  }

  p {
    color: blue;
    font-size: 2rem;
    text-align: center;
    max-width: 90vw;
    z-index: 1;
  }


  div.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 10rem;
    z-index: 1;
  }

  .media-farts {
    z-index: 1;
  }

  a {
    color: lime;
    font-size: 1.75rem;
    text-decoration: underline;
  }
  a:hover, a:focus {
    text-decoration: none;
  }
  a:active {
    color: yellow;
    text-decoration: underline;
  }

  img.torch {
    position: fixed;
    top: 2vh;
    width: 20vw;
  }
  img.torch.right {
    right: 0;
  }
  img.torch.left {
    left: 0;
    transform: scaleX(-1);
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 5rem;
    }
    img.flameline {
      min-height: 20%;
      min-width: 100%;
    }

    p {
      font-size: 1.25rem;
    }

    a {
      font-size: 1rem;
    }
    img.torch {
      width: 10vw;
    }
  }
</style>

<main>
  <h1>himynameisdave</h1>
  <p>
    welcome to my website. i'm into javascript and other crap like that.
  </p>

  <img class="torch left" src="/torch-flame.gif" alt="Torch Flame" />
  <img class="torch right" src="/torch-flame.gif" alt="Torch Flame" />

  <div class="links">
    <a href="https://github.com/himynameisdave" target="_blank" rel="noopener">
      github
    </a>
    <a href="https://bsky.app/profile/himynameisdave.com" target="_blank" rel="noopener">
      bsky
    </a>
    <a href="mailto:d@velunny.com?subject=i've%20got%20a%20bone%20to%20pick%20with%20you" target="_blank" rel="noopener">
      email
    </a>
  </div>

  <div class="media-farts">
    <Music {...data.lastfm} />
  </div>

  <img class="flameline" src="/flameline.gif" alt="Flameline" />
</main>
