import { TracksList } from '@/components/TracksList';
import { styles } from '@/components/styles';
import { getDeezerTracks } from '@/services/deezer';
import { ITrack } from '@/types/deezer';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function TracksPage() {
  const item = useLocalSearchParams();
  const playlistUrl = item.playlistUrl as string;
  const navigation = useNavigation();

  const [tracks, setTracks] = React.useState([] as ITrack[]);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    let tracks = []
    if (playlistUrl.includes('deezer')) {
      const code = playlistUrl.split('/').pop();
      tracks = await getDeezerTracks(code);
    } else if (playlistUrl.includes('spotify')) {
      // Call the function for Spotify here
    } else {
      // Handle other cases here
    }
    setTracks(tracks);
  }

  return (
    <View style={styles.containerFullWidth}>
      <View style={styles.header}>
        <Text style={styles.text}>Músicas da playlist</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TracksList tracks={tracks} />
      </ScrollView>
      <View style={styles.fixedFooter}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Voltar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Criar playlist</Text>
        </Pressable>
      </View>
    </View>
  )
}
