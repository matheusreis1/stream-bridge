import React from 'react';
import { Pressable, TextInput, Text, View } from 'react-native';
import { styles } from './components/styles';
import { SpotifyExpoLogin } from './spotify/Login';
import { ITrack } from './types/deezer';
import { TracksList } from './components/TracksList';
import { getDeezerTracks } from './services/deezer';

export default function App() {
  const [playlistUrl, setPlaylistUrl] = React.useState('' as string);
  const [tracks, setTracks] = React.useState([] as ITrack[]);

  const getTracks = async () => {
    // TODO: call the function depending on the url
    // if deezer: deezer
    // if spotify: spotify
    // etc...

    const tracks = await getDeezerTracks(playlistUrl);

    setTracks(tracks);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={playlistUrl} onChange={() => setPlaylistUrl(playlistUrl)} />

      <Pressable style={styles.button} onPress={() => getTracks()}>
        <Text style={styles.text}>Buscar</Text>
      </Pressable>

      <View style={{ flexDirection: 'row' }}>
        <SpotifyExpoLogin />
      </View>

      <TracksList tracks={tracks} />
    </View>
  );
}


