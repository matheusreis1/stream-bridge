import * as React from 'react';
import { useState, useEffect } from 'react';
import { setItemAsync, getItemAsync } from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync } from 'expo-auth-session';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
const AUTH_STORAGE_KEY = 'jwtToken';

export const SpotifyExpoLogin = () => {
  const setCachedToken = async (token: string) => setItemAsync(AUTH_STORAGE_KEY, token);
  const getToken = async () => getItemAsync(AUTH_STORAGE_KEY);
  const [user, getUser] = useState({});

  const [authTokens, setAuthTokens] = useState({accessToken: "", refreshToken: ""});

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '2a610295915749f89285d83854787345',
      scopes: ['user-read-email', 'playlist-modify-public'],
      usePKCE: true,
      redirectUri: makeRedirectUri({
        scheme: 'exp://192.168.68.103:8081'
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
              scheme: 'exp://192.168.68.103:8081'
            }),
            extraParams: {
              code_verifier: request.codeVerifier,
              grant_type: 'authorization_code',
            },
          },
          discovery
        );

        setAuthTokens({accessToken: exchangeTokenResponse.accessToken, refreshToken: exchangeTokenResponse.refreshToken});
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
    <Button
      disabled={!request}
      title="Login Spotify"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}