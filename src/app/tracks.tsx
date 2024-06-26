import { LinkButton } from '@/components/LinkButton';
import { TracksList } from '@/components/TracksList';
import { styles } from '@/components/styles';
import { TracksToCreateContext } from '@/context/TracksToCreate';
import { getDeezerTracks } from '@/services/api';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function TracksPage() {
  const navigation = useNavigation();
  const item = useLocalSearchParams();
  const playlistUrl = item.playlistUrl as string;
  const { setTracks } = useContext(TracksToCreateContext);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    let tracksToInclude = [];
    if (playlistUrl.includes('deezer')) {
      const code = playlistUrl.split('/').pop().split('?')[0];
      tracksToInclude = await getDeezerTracks(code);
    } else if (playlistUrl.includes('spotify')) {
      // Call the function for Spotify here
    } else {
      // Handle other cases here
    }
    setTracks(tracksToInclude);
  }

  return (
    <View style={styles.containerFullWidth}>
      <View style={styles.header}>
        <Text style={styles.text}>Músicas da playlist</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TracksList />
      </ScrollView>
      <View style={styles.fixedFooter}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Voltar</Text>
        </Pressable>

        <LinkButton
          label={'Criar playlist'}
          onPress={() => {getTracks()}}
          isDisabled={false}
          href={{pathname: "/create-playlist"}}
        />
      </View>
    </View>
  )
}
