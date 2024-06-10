
import React from 'react';
import { Pressable, TextInput, ScrollView } from 'react-native';
import { styles } from '../components/styles';
import { Link } from 'expo-router';
import { TracksToCreateProvider } from '@/context/TracksToCreate';

export default function HomePage() {
  const [playlistUrl, setPlaylistUrl] = React.useState('https://www.deezer.com/us/playlist/8245981802');

  return (
    <TracksToCreateProvider >
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput style={styles.textInput} value={playlistUrl} onChange={() => setPlaylistUrl(playlistUrl)} />
          <Pressable style={styles.button} onTouchEnd={() => {}}>
            <Link href={{pathname: "/tracks", params: {playlistUrl}}} style={styles.text}>Buscar playlist</Link>
          </Pressable>
        </ScrollView>
    </TracksToCreateProvider>
  );
}
