/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const BadgeResult = ({result, description, status}) => {
  return (
    <>
      <View style={styles.viewImc}>
        <Text style={styles[status]}>{result}</Text>
        <Text style={styles.imcText}>IMC</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  viewImc: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#dcdde1',
    borderStyle: 'solid',
  },
  medium: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fbc531',
  },
  good: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#4cd137',
  },
  bad: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#e84118',
  },
  imcText: {
    fontSize: 10,
    color: '#dcdde1',
  },
  description: {
    width: '60%',
    paddingLeft: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#dcdde1',
  },
});

export default BadgeResult;
