import React, { useContext } from 'react';
import { Pressable, TextInput, ScrollView, Text } from 'react-native';
import { styles } from '../components/styles';
import { SpotifyExpoLogin } from '../spotify/Login';
import { TracksToCreateContext } from '@/context/TracksToCreate';
import { addTracksToPlaylist, createPlaylist, fetchProfile, getTrack } from '@/services/spotify';

export default function CreatePlaylistPage() {
  const [newPlaylistName, setNewPlaylistName] = React.useState('');
  const { tracks, accessToken } = useContext(TracksToCreateContext);

  const submitNewPlaylist = async () => {
    const trackNames = tracks.map(track => track.title);

    const spotifyUrisPromises = trackNames.map(async (track) => {
      const spotifyTrack = await getTrack(accessToken, track);
      return spotifyTrack.uri;
    });
    const spotifyUris = await Promise.all(spotifyUrisPromises);

    const user = await fetchProfile(accessToken);

    const playlistCreated = await createPlaylist(accessToken, user.id, newPlaylistName);

    console.log('spotify uris', playlistCreated.id, spotifyUris);

    console.log('accessToken', accessToken);

    await addTracksToPlaylist(accessToken, playlistCreated.id, spotifyUris);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.textInput}
        value={newPlaylistName}
        onChangeText={setNewPlaylistName}
      />

      <Pressable style={styles.button} onPress={() => submitNewPlaylist()}>
        <Text style={styles.text}>Criar</Text>
      </Pressable>

      <SpotifyExpoLogin />
    </ScrollView>
  );
}
