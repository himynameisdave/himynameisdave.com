import { LASTFM_USERNAME, LASTFM_API_KEY } from '$env/static/private';
import ky from 'ky';

const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Gets the search params for a Last.fm API request.
 * @param lastfmMethod
 * @returns
 */
const getSearchParams = (lastfmMethod: string = 'user.getrecenttracks'): URLSearchParams => {
  return new URLSearchParams({
    method: lastfmMethod,
    user: LASTFM_USERNAME,
    api_key: LASTFM_API_KEY,
    format: 'json',
  });
};

type Image = {
  size: 'small' | 'medium' | 'large' | 'extralarge';
  '#text': string;
};

type Track = {
  artist: {
    mbid: string;
    '#text': string;
  };
  streamable: string;
  image: Image[];
  mbid: string;
  album: {
    mbid: string;
    '#text': string;
  };
  name: string;
  '@attr'?: {
    nowplaying: string;
  };
  url: string;
};

type RecentTracksResponse = {
  recenttracks: {
    track: Track[]
  };
}

/**
 * Get the list of recent tracks from Last.fm.
 * @returns
 */
export function getRecentTracks(): Promise<RecentTracksResponse> {
  return ky<RecentTracksResponse>(BASE_URL, { searchParams: getSearchParams() }).json();
}
