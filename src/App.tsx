import React, { useEffect } from 'react';
import { Pressable, TextInput, Text, View, ScrollView } from 'react-native';
import { styles } from './components/styles';
import { SpotifyExpoLogin } from './spotify/Login';
import { ITrack } from './types/deezer';
import { TracksList } from './components/TracksList';
import { getDeezerTracks } from './services/deezer';

export default function App() {
  const [playlistUrl, setPlaylistUrl] = React.useState('8245981802');
  const [tracks, setTracks] = React.useState([] as ITrack[]);

  // useEffect(() => {
  //   getTracks();
  // }, []);

  const getTracks = async () => {
    // TODO: call the function depending on the url
    // if deezer: deezer
    // if spotify: spotify
    // etc...

    const tracks = await getDeezerTracks(playlistUrl);

    setTracks(tracks);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.textInput} value={playlistUrl} onChange={() => setPlaylistUrl(playlistUrl)} />

      <Pressable style={styles.button} onPress={() => getTracks()}>
        <Text style={styles.text}>Buscar</Text>
      </Pressable>

      <SpotifyExpoLogin />

      <TracksList tracks={tracks} />      
    </ScrollView>
  );
}


