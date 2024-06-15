import * as React from 'react';
import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync } from 'expo-auth-session';
import { Pressable, Text } from 'react-native';
import * as SecureStore from "expo-secure-store";
import { TracksToCreateContext, TracksToCreateProvider } from '@/context/TracksToCreate';
import { TextButton } from '@/components/TextButton';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
const AUTH_STORAGE_KEY = 'jwtToken';

export const SpotifyExpoLogin = () => {
  // const setCachedToken = async (token: string) => SecureStore.setItemAsync(AUTH_STORAGE_KEY, token);
  const { accessToken, setAccessToken } = React.useContext(TracksToCreateContext);
  
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '2a610295915749f89285d83854787345',
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: true,
      redirectUri: makeRedirectUri({
        scheme: 'exp://192.168.68.107:8081'
      }),
      responseType: 'code',
    },
    discovery
  );

  useEffect(() => {
    const exchange = async (exchangeTokenReq: string) => {
      try {
        const exchangeTokenResponse = await exchangeCodeAsync(
          {
            clientId: '2a610295915749f89285d83854787345',
            code: exchangeTokenReq,
            redirectUri: makeRedirectUri({
              scheme: 'exp://192.168.68.107:8081'
            }),
            extraParams: {
              code_verifier: request.codeVerifier,
              grant_type: 'authorization_code',
            },
          },
          discovery
        );

        setAccessToken(exchangeTokenResponse.accessToken);

        // setCachedToken(exchangeTokenResponse.accessToken);

        // setAuthTokens({accessToken: exchangeTokenResponse.accessToken, refreshToken: exchangeTokenResponse.refreshToken});
      } catch (error) {
        console.error("error", error);
      }
    };

    if (response) {
      response.type === "success" && exchange(response.params.code);

      response.type === "error" && console.error("error", response.error);
    }
  }, [response]);

  return (
    <TextButton
      label={'Login Spotify'}
      isDisabled={!request}
      onPress={() => {promptAsync();}}
    />
  );
}