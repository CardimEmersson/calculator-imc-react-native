/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? styles.disabled : styles.button}
      disabled={disabled}>
      <Text style={disabled ? styles.textButtonDisabled : styles.textButton}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097e6',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dcdde1',
  },
  disabled: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0096e654',
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
  },
  textButtonDisabled: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dcdde16b',
  },
});

export default Button;
