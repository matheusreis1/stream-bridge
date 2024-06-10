import React, { useContext, useState } from 'react';
import { Pressable, TextInput, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../components/styles';
import { SpotifyExpoLogin } from '../spotify/Login';
import { TracksToCreateContext } from '@/context/TracksToCreate';
import { addTracksToPlaylist, createPlaylist, fetchProfile, getTrack } from '@/services/spotify';
import { IconTextInput } from '@/components/InputWithIcon';

export default function CreatePlaylistPage() {
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [playlistCreatedUrl, setPlaylistCreatedUrl] = useState('');
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

    await addTracksToPlaylist(accessToken, playlistCreated.id, spotifyUris);

    setPlaylistCreatedUrl(playlistCreated.external_urls.spotify);
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

      {playlistCreatedUrl && (
        <IconTextInput
          inputValue={playlistCreatedUrl}
          initialIconName="copy-all"
          alternateIconName="check"
          placeholder=''
        />
      )}
    </ScrollView>
  );
}
