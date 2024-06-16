import React, { useState } from 'react';
import { LabelledTextInput } from '@/components/LabelledTextInput';
import { LinkButton } from '@/components/LinkButton';
import { ScrollPage } from '@/components/ScrollPage';

export default function HomePage() {
  const [playlistUrl, setPlaylistUrl] = useState('');

  return (
    <ScrollPage>
      <LabelledTextInput 
        label={'URL da playlist'}
        value={playlistUrl}
        onChangeText={setPlaylistUrl}
        placeholder={'https://www.deezer.com/us/playlist/8245981802'}
      />
      <LinkButton
        label={'Buscar playlist'}
        isDisabled={!playlistUrl}
        href={{pathname: "/tracks", params: {playlistUrl}}}
      />
    </ScrollPage>
  );
}
