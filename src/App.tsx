import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from '@/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
