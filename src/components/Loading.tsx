import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export const Loading = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="gray" />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: 'gray', // Match the color of the ActivityIndicator
  },
});
