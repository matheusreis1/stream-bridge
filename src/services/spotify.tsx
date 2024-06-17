import axios from "axios";

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Accept': 'application/json'
  }
});

export async function fetchProfile(token: string): Promise<any> {
  try {
    const { data: user } = await spotifyApi.get("/me", {
      headers: { Authorization: `Bearer ${token}` }
    });

    return user;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const createPlaylist = async (token: string, userId: string, playlistName: string): Promise<any> => {
  try {
    const { data: playlist } = await spotifyApi.post(`/users/${userId}/playlists`, {
        name: playlistName,
        public: true,
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getTrack = async (token: string, trackName: string): Promise<any> => {
  try {
    const { data: {tracks} } = await spotifyApi.get(`/search?limit=1&q=${trackName}&type=track`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    if (tracks.items.length === 0) {
      return null;
    }
  
    return tracks.items[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const addTracksToPlaylist = async (token: string, playlistId: string, tracks: string[]): Promise<any> => {
  try {
    const { data: { data } } = await spotifyApi.post(`/playlists/${playlistId}/tracks`, {
      uris: tracks,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
