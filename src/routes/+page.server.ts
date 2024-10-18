import { getRecentTracks } from '$lib/lastfm';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const tracks = await getRecentTracks();
  const [track] = tracks.recenttracks.track;

  return {
    lastfm: {
      track: track.name,
      artist: track.artist['#text'],
      album: track.album['#text'],
      albumArtURLs: {
        small: track.image.find(image => image.size === 'small')?.['#text'],
        medium: track.image.find(image => image.size === 'medium')?.['#text'],
        large: track.image.find(image => image.size === 'large')?.['#text'],
        extralarge: track.image.find(image => image.size === 'extralarge')?.['#text'],
      },
      isCurrentlyPlaying: track['@attr']?.nowplaying === 'true',
    }
  };
}
