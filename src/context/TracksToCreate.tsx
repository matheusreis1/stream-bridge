import { ITrack } from '@/types/deezer';
import React, { createContext, useState } from 'react';

export const TracksToCreateContext = createContext({
  tracks: [] as ITrack[],
  setTracks: (tracks: string[]) => {},
  accessToken: '',
  setAccessToken: (accessToken: string) => {},
});

export const TracksToCreateProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  return (
    <TracksToCreateContext.Provider value={{ tracks, setTracks, accessToken, setAccessToken }}>
      {children}
    </TracksToCreateContext.Provider>
  );
};