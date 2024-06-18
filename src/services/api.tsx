import { ITrack } from "@/types/deezer";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json'
  }
});

export const getDeezerTracks = async (playlistId: string): Promise<ITrack[]> => {
  const { data: { data: tracks } } = await api.get(`/deezer/playlist/${playlistId}/tracks`);
  
  return tracks;
}

export const createSpotifyPlaylist = async (token: string, trackNames: string[], playlistName: string): Promise<any> => {
  try {
    const { data: playlist } = await api.post(`/spotify/playlists`, {
        playlistName,
        trackNames,
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
