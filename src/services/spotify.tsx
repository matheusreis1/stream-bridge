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

export const createPlaylist = async (userId: string): Promise<any> => {
  const { data: { data: tracks } } = await spotifyApi.post(`/users/${userId}/playlists`);
  
  return tracks;
}

export const getTrack = async (playlistId: string): Promise<any> => {
  const { data: { data: tracks } } = await spotifyApi.get(`/search/${playlistId}/tracks?limit=150`);
  
  return tracks;

}

export const addTracksToPlaylist = async (playlistId: string, tracks: string[]): Promise<any> => {
  const { data: { data } } = await spotifyApi.post(`/playlist/${playlistId}/tracks`, {
    uris: tracks,
    position: 0,
  });
  
  return data;
}
