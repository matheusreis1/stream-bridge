import { ITrack } from "@/types/deezer";

export const getDeezerTracks = async (playlistId: string): Promise<ITrack[]> => {
  // const result = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/8245981802/tracks?limit=150', 
    // {headers: {'Accept': 'application/json'}});

  const result = await fetch('http://localhost:3001/playlist/8245981802/tracks?limit=150', 
      {headers: {'Accept': 'application/json'}});

  const { data } = await result.json()

  return data;
}
