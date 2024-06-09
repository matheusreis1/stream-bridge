
import React from 'react';
import { Pressable, TextInput, ScrollView } from 'react-native';
import { styles } from '../components/styles';
import { SpotifyExpoLogin } from '../spotify/Login';
import { Link } from 'expo-router';

export default function App() {
  const [playlistUrl, setPlaylistUrl] = React.useState('https://www.deezer.com/us/playlist/8245981802');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.textInput} value={playlistUrl} onChange={() => setPlaylistUrl(playlistUrl)} />

      <Pressable style={styles.button} onTouchEnd={() => {}}>
        <Link href={{pathname: "/tracks", params: {playlistUrl}}} style={styles.text}>Buscar playlist</Link>
      </Pressable>

      <SpotifyExpoLogin />
    </ScrollView>
  );
}
