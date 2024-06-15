import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Clipboard, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const IconTextInput = ({ initialIconName, alternateIconName, inputValue, placeholder, ...rest }) => {
  const [iconName, setIconName] = useState(initialIconName);
  
  const copyToClipboard = () => {
    Clipboard.setString(inputValue);
    setIconName((prevIconName) => (prevIconName === initialIconName ? alternateIconName : initialIconName));
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={inputValue}
        {...rest}
      />
      <Pressable onPress={copyToClipboard}>
        <Icon name={iconName} size={24} color="gray" style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    width: '80%'
  },
  textInput: {
    width: '100%'
  },
  icon: {
    marginLeft: 10,
  }
});
