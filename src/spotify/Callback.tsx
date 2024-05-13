import React from 'react';
import { View, TextInput } from 'react-native';

const SpotifyCallback = () => {
  return (
    <View>
      <TextInput
        placeholder="Enter text here"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default SpotifyCallback;
