export interface ITrack {
  id: number;
  title: string;
  duration: number;
  preview: string;
  album: {
    cover_small: string;
  }
  artist: {
    name: string;
  }
}

export interface IPlaylisTracksResponse {
  data: ITrack[];
  total: number;
}
