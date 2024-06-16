import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export interface ITextButtonProps {
  label: string;
  isDisabled: boolean;
  onPress: () => void;
}

export const TextButton = ({ label, onPress, isDisabled }: ITextButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isDisabled && styles.buttonDisabled,
        pressed && !isDisabled && styles.buttonPressed,
      ]}
      disabled={isDisabled}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10,
  },
  buttonDisabled:{
    backgroundColor: 'gray',
  },
  buttonPressed: {
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
