import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from '../components/styles';
import { TracksToCreateProvider } from '@/context/TracksToCreate';
import { LabelledTextInput } from '@/components/LabelledTextInput';
import { LinkButton } from '@/components/LinkButton';

export default function HomePage() {
  const [playlistUrl, setPlaylistUrl] = useState('');

  return (
    <TracksToCreateProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <LabelledTextInput 
          label={'URL da playlist'}
          value={playlistUrl}
          onChangeText={setPlaylistUrl}
          placeholder={'https://www.deezer.com/us/playlist/8245981802'}
        />
        <LinkButton
          label={'Buscar playlist'}
          onPress={() => {}}
          isDisabled={!playlistUrl}
          href={{pathname: "/tracks", params: {playlistUrl}}}
        />
      </ScrollView>
    </TracksToCreateProvider>
  );
}
