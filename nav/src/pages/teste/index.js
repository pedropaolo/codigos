
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

import {NavigationActions} from 'react-navigation';
import propTypes from 'prop-types';
import api from '../../services/api';


export default class Teste extends Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#7A91CA',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  static propTypes = {
    navigation: propTypes.shape(
      {
        dispatch: propTypes.func,
      }
    ).isRequired,
  };

  // função que vai ate a pagina teste2

  //  navigateteste2 = () =>{
  //
  //   this.props.navigation.navigate('Twelcome');
  //
  // }

  //variavel de estado username digitada pelo usuario no campo text input
  state = {
    username: '',
    loading: false,
    errorMessage: null
  }

  // verificando se o usuario de fato existe
  checkUserExists = async (username) => {
    // requisção HTTP! metodo api usa o metodo GET para fazer uma requisição, concatenando a string /users/${username}
    // ao URL https://api.github.com, para gerar o seguinte metodo GET https://api.github.com/users/username
    const user = await api.get(`/users/${username}`);
  }

  signIn = async () => {

    const {username} = this.state;

    // verifica tamanho da string que foi passada
    if (username.lenght === 0) return;

    // mantem a barra de carregamento

    this.setState({loading: true});

    // try : executa a primeira linha, se a resposta der certo, executa o que aconteceu dentro do escopo


    try {
      // espera pelo resultado da requisição feita pelo método this.checkUserExists(username);
      await this.checkUserExists(username);

      // resetar o historico de paginas ja navegadas
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'Twelcome'}),
        ],
      });

      this.props.navigation.dispatch(resetAction);
    }

    // linha await this.checkUserExists(username) deu erro! trata os erros com o que vier dentro do escopo

    catch(err){

      this.setState({loading: false , errorMessage:'Usuário não existe'});


    }
  };

/*

  Aplicando o loading dentro do button enquanto o programa faz a requisicao

  <View  style={styles.button}>
  <TouchableOpacity onPress={this.signIn}>
  {this.state.loading
  // se estiver loading, ou seja ( se this.state.loading existe)
  ? <ActivityIndicator size:"small" color = "#FFF"/>
  // se nao estiver , ou seja ( se this.state.loading  não existe existe)
  : <Text style={styles.buttontext}>Clique aqui</Text>}

  </TouchableOpacity>
  </View>
  */

  /* Apresentando uma mensagem de erro caso o usuario  não exista
  !! : certificando que o resultado da expressão é booleano
  && : porta and, executa a próxima ação só se a afirmação anterior seja verdadeira (true)
  {!!this.state.errorMessage
  && <Text style={styles.error}>{this.state.errorMessage}</Text>}
  */

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.title}>Seja Bem-Vindo</Text>
      <Text style={styles.text}>Para continuar, informe seu login no Github:</Text>

      {!!this.state.errorMessage
      && <Text style={styles.error}>{this.state.errorMessage}</Text>}

      <View style={styles.form}>
      <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Digite seu usuário"
      underlineColorAndroid="rgba(0,0,0,0)"
      value ={this.state.username}
      onChangeText = {username => this.setState({username})}
      />
      </View>



      <View  style={styles.button}>
      <TouchableOpacity onPress={this.signIn}>
      {this.state.loading
      ? <ActivityIndicator size ="small" color = "#FFF"/>
      : <Text style={styles.buttontext}>Clique aqui</Text>}

      </TouchableOpacity>
      </View>

      </View>

    );
  }
}
