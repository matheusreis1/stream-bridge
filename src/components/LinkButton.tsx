import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

export interface ILinkButtonProps {
  label: string;
  isDisabled: boolean;
  href: string | Record<string, unknown>;
  onPress?: () => void;
}

export const LinkButton = (
  {
    label, 
    onPress, 
    isDisabled, 
    href 
  }: ILinkButtonProps) => {
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
      <Link href={href} style={styles.buttonText}>{label}</Link>
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
