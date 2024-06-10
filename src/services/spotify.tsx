import { ITrack } from "@/types/spotify";
import axios from "axios";

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Accept': 'application/json'
  }
});

export async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  return await result.json();
}

export const createPlaylist = async (token: string, userId: string, playlistName: string): Promise<any> => {
  const { data: playlist } = await spotifyApi.post(`/users/${userId}/playlists`, {
      name: playlistName,
      public: true,
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  
  console.log('playlist created', playlist);

  return playlist;
}

export const getTrack = async (token: string, trackName: string): Promise<any> => {
  const { data: {tracks} } = await spotifyApi.get(`/search?limit=1&q=${trackName}&type=track`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (tracks.items.length === 0) {
    return null;
  }

  return tracks.items[0];
}

export const addTracksToPlaylist = async (token: string, playlistId: string, tracks: string[]): Promise<any> => {
  const { data: { data } } = await spotifyApi.post(`/playlists/${playlistId}/tracks`, {
    uris: tracks,
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  
  return data;
}
