import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync } from 'expo-auth-session';
import { TextButton } from '@/components/TextButton';
import { setAccessToken } from '@/services/acessToken';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export const SpotifyExpoLogin = ({ onLoginSuccess }) => {
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

        await setAccessToken(exchangeTokenResponse.accessToken);
        onLoginSuccess(exchangeTokenResponse.accessToken);
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