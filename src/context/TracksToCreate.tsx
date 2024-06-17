import { ITrack } from '@/types/deezer';
import React, { createContext, useState } from 'react';

export const TracksToCreateContext = createContext({
  tracks: [] as ITrack[],
  setTracks: (tracks: string[]) => {},
});

export const TracksToCreateProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  return (
    <TracksToCreateContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TracksToCreateContext.Provider>
  );
};