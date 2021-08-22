/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import BadgeResult from './components/BadgeResult';
import {calculateImc} from './services';

const Home = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [statusImc, setStatusImc] = useState();

  const handleHeight = text => {
    setHeight(text);
  };

  const handleWeight = text => {
    const someNumbers = text.toString().replace(',', '');
    const formatWeight = someNumbers.toString().replace(/(\d{1,2})$/, ',$1');

    if (text.toString().length > 2) {
      setWeight(formatWeight);
    } else {
      setWeight(someNumbers);
    }
  };

  const onSubmit = () => {
    const formatWeight = weight.toString().replace(',', '.');

    const result = calculateImc(Number(formatWeight), Number(height));

    setStatusImc({...result, imc: result.imc.toString().replace('.', ',')});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC</Text>
      <View style={styles.boxInput}>
        <Input
          unity="Cm"
          value={height}
          onChangeText={text => handleHeight(text)}
          iconName="ruler-vertical"
          placeholder="Altura"
          keyboardType="numeric"
          maxLenght={3}
        />
        <Input
          unity="Kg"
          value={weight}
          onChangeText={text => handleWeight(text)}
          iconName="weight"
          placeholder="Peso"
          keyboardType="numeric"
          maxLenght={6}
        />
        <Button
          text="Calcular"
          onPress={onSubmit}
          disabled={
            weight.toString().length === 0 || height.toString().length === 0
          }
        />
      </View>
      {statusImc && (
        <View style={styles.badgeResult}>
          <BadgeResult
            result={statusImc.imc}
            description={statusImc.description}
            status={statusImc.status}
          />
        </View>
      )}
      <View>
        <Image
          style={styles.image}
          source={require('../public/assets/imc-calculo-classificacao.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2d3436',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#0984e3',
    fontSize: 50,
    fontWeight: 'bold',
  },
  boxInput: {
    width: '100%',
    paddingVertical: 20,
  },
  badgeResult: {
    width: '100%',
    backgroundColor: '#353b48',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    height: 250,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});

export default Home;
