import React from 'react';
import { View } from 'react-native';
import { Input } from '@/components/Input';
import { styles } from './components/styles';
import { SpotifyLogin } from './spotify/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />

      <View style={{ flexDirection: 'row' }}>
        <SpotifyLogin />

        {/* <Pressable style={[styles.button, { marginRight: 10 }]}>
          <Image source={{ uri: 'https://store-images.s-microsoft.com/image/apps.62962.14205055896346606.c235e3d6-fbce-45bb-9051-4be6c2ecba8f.28d7c3cb-0c64-40dc-9f24-53326f80a6dd?h=464' }} style={styles.image} />
        </Pressable>

        <Pressable style={styles.button}>
          <Image source={{ uri: 'https://store-images.s-microsoft.com/image/apps.62962.14205055896346606.c235e3d6-fbce-45bb-9051-4be6c2ecba8f.28d7c3cb-0c64-40dc-9f24-53326f80a6dd?h=464' }} style={styles.image} />
        </Pressable> */}
      </View>
    </View>
  );
}


