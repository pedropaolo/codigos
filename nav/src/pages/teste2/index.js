
/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import styles from './styles';

export default class Teste2 extends Component {

  static navigationOptions = {
    title: 'Produtos',
    headerStyle: {
      backgroundColor: 'pink',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View>
        <Text>Pedroca pedroquinha</Text>
      </View>
    );
  }
}
