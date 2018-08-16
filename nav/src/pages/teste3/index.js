/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import styles from './styles';

export default class Teste3 extends Component {

  static navigationOptions = {
    title: 'Repositorios',
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
        <Text>Im the MyComponent component</Text>
      </View>
    );
  }
}
