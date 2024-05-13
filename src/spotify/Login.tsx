import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { styles } from '../components/styles';
import { SPOTIFY_CLIENT_ID } from '@env';

const generateRandomString = (length: number) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const requestUserAuthorization = async () => {
  const codeVerifier = generateRandomString(64);
  const sha256 = async (plain: any) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }
  const base64encode = (input: any) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const clientId = SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/spotify-auth-callback';

  const scope = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize")

  // generated in the previous step
  window.localStorage.setItem('code_verifier', codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

export const SpotifyLogin = () => {
  // TODO: tranform this into a component
  return (
    <View>
      <Pressable onPress={requestUserAuthorization} style={[styles.button, { marginRight: 10 }]}>
        <Image source={{ uri: 'https://store-images.s-microsoft.com/image/apps.62962.14205055896346606.c235e3d6-fbce-45bb-9051-4be6c2ecba8f.28d7c3cb-0c64-40dc-9f24-53326f80a6dd?h=464' }} style={styles.image} />
      </Pressable>
    </View>
  );
}
