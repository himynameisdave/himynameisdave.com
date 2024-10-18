<script lang="ts">
  export let track: string;
  export let artist: string;
  export let isCurrentlyPlaying: boolean;
  export let albumArtURLs: Record<'small' | 'medium' | 'large' | 'extralarge', string | undefined>
</script>

<style>
  .music {
    border: 3px yellow dashed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    color: gray;
    max-width: 50vw;
    text-decoration: none;
  }

  .music img {
    height: 120px;
    width: 120px;
  }

  .music h1 {
    color: blue;
    font-size: 1rem;
    font-style: italic;
    margin: 0;
    padding: 0;
  }

  .music h2 {
    color: red;
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
  .music h3 {
    font-size: 1.25rem;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  @keyframes currently-playing {
    0% {
      color: yellow;
      opacity: 1;
    }
    45% {
      opacity: 0;
    }
    50% {
      color: lime;
      opacity: 1;
    }
    95% {
      opacity: 0;
    }
    100% {
      color: yellow;
      opacity: 1;
    }
  }

  .currently-playing {
    animation: currently-playing 2s infinite;
    animation-timing-function: ease-in-out;
    font-size: 1rem;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
</style>

<a class="music" href="https://www.last.fm/user/himynameisdave9" target="_blank" rel="noopener">
  <picture>
    <source srcset={albumArtURLs.extralarge} media="(min-width: 1024px)" />
    <source srcset={albumArtURLs.large} media="(min-width: 768px)" />
    <source srcset={albumArtURLs.medium} media="(min-width: 320px)" />
    <img src={albumArtURLs.small} alt="Album Art" />
  </picture>
  <div class="info">
    <h1>last played song</h1>
    <h2>{track}</h2>
    <h3>{artist}</h3>
    {#if isCurrentlyPlaying}
      <div class="currently-playing">
        ...currently playing...
      </div>
    {/if}
  </div>
</a>
