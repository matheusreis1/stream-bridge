import React, { useContext, useEffect, useState } from 'react';
import { SpotifyExpoLogin } from '../spotify/Login';
import { TracksToCreateContext } from '@/context/TracksToCreate';
import { addTracksToPlaylist, createPlaylist, fetchProfile, getTrack } from '@/services/spotify';
import { IconTextInput } from '@/components/InputWithIcon';
import { LabelledTextInput } from '@/components/LabelledTextInput';
import { TextButton } from '@/components/TextButton';
import { ScrollPage } from '@/components/ScrollPage';

export default function CreatePlaylistPage() {
  // TODO: add loading
  // TODO: add error handling

  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [playlistCreatedUrl, setPlaylistCreatedUrl] = useState('');
  const [isLoggedIntoSpotify, setIsLoggedIntoSpotify] = useState(false);
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

  useEffect(() => {
    setIsLoggedIntoSpotify(!!accessToken);
  }, [accessToken]);

  return (
    <ScrollPage>
      <SpotifyExpoLogin />

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

      {playlistCreatedUrl && (
        <IconTextInput
          inputValue={playlistCreatedUrl}
          initialIconName="copy-all"
          alternateIconName="check"
          placeholder=''
        />
      )}
    </ScrollPage>
  );
}
