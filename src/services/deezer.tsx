import { ITrack } from "@/types/deezer";
import axios from "axios";

const deezerApi = axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/',
  baseURL: 'http://localhost:3001',
  headers: {
    'Accept': 'application/json'
  }
});

export const getDeezerTracks = async (playlistId: string): Promise<ITrack[]> => {
  const { data: { data: tracks } } = await deezerApi.get(`/playlist/${playlistId}/tracks?limit=150`);
  
  return tracks;
}
