import React, { useContext, useEffect, useState } from 'react';
import { SpotifyExpoLogin } from '../spotify/Login';
import { TracksToCreateContext } from '@/context/TracksToCreate';
import { IconTextInput } from '@/components/InputWithIcon';
import { LabelledTextInput } from '@/components/LabelledTextInput';
import { TextButton } from '@/components/TextButton';
import { ScrollPage } from '@/components/ScrollPage';
import { Loading } from '@/components/Loading';
import { getAccessToken } from '@/services/acessToken';
import { createSpotifyPlaylist } from '@/services/api';

export default function CreatePlaylistPage() {
  const { tracks } = useContext(TracksToCreateContext);

  const [accessToken, setAccessToken] = useState('');
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [playlistCreatedUrl, setPlaylistCreatedUrl] = useState('');
  const [isLoggedIntoSpotify, setIsLoggedIntoSpotify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitNewPlaylist = async () => {
    setIsLoading(true);
    const trackNames = tracks.map(track => track.title);

    const playlistCreated = await createSpotifyPlaylist(accessToken, trackNames, newPlaylistName);

    setPlaylistCreatedUrl(playlistCreated.url);
    setIsLoading(false);
  }

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if (token) {
        setAccessToken(token);
        setIsLoggedIntoSpotify(!!token);
      }
    };
    
    getToken();
  }, []);

  const handleLoginSuccess = (token: string) => {
    setAccessToken(token);
  };

  return (
    <ScrollPage>
      {isLoading && (
        <Loading
          message={'Criando playlist...'}
        />
      )}

      <SpotifyExpoLogin onLoginSuccess={handleLoginSuccess} />

      <LabelledTextInput
        label={'Nome da playlist'}
        value={newPlaylistName}
        onChangeText={setNewPlaylistName}
        placeholder={'Nome da playlist'}
        readOnly={!isLoggedIntoSpotify}
      />

      <TextButton
        label={'Criar'}
        onPress={() => submitNewPlaylist()}
        isDisabled={!isLoggedIntoSpotify}
      />

      <IconTextInput
        inputValue={playlistCreatedUrl}
        initialIconName="copy-all"
        alternateIconName="check"
        placeholder='URL da playlist criada'
        isDisabled={!playlistCreatedUrl}
      />
    </ScrollPage>
  );
}
