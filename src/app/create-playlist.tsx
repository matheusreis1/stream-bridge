import React, { useContext, useEffect } from 'react';
import { Pressable, TextInput, ScrollView, Text } from 'react-native';
import { styles } from '../components/styles';
import { SpotifyExpoLogin } from '../spotify/Login';
import { Link } from 'expo-router';
import { TracksToCreateContext } from '@/context/TracksToCreate';

export default function CreatePlaylistPage() {
  const [newPlaylistName, setNewPlaylistName] = React.useState('');
  const { tracks, setTracks } = useContext(TracksToCreateContext);

  const createPlaylist = () => {
    console.log('creating tracks:', tracks);
    // Call the function to create the playlist here
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.textInput} value={newPlaylistName} onChange={() => setNewPlaylistName(newPlaylistName)} />

      <Pressable style={styles.button} onPress={() => createPlaylist()}>
        <Text style={styles.text}>Criar</Text>
      </Pressable>

      <SpotifyExpoLogin />
    </ScrollView>
  );
}
