/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Input = ({
  unity,
  iconName,
  placeholder,
  keyboardType,
  maxLenght,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome5 name={iconName} solid style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#dcdde1"
        keyboardType={keyboardType}
        maxLength={maxLenght}
      />
      <Text style={styles.unity}>{unity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    position: 'relative',
    margin: 5,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#353b48',
    borderRadius: 20,
    borderColor: '#00a8ff',
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#dcdde1',
  },
  unity: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dcdde1',
  },
  icon: {
    position: 'absolute',
    left: 15,
    color: '#fff',
    fontSize: 25,
    zIndex: 1,
  },
});

export default Input;
