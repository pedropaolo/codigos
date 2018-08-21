import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Router , Scene} from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';

//Utilizando o roterflux para navegar entre as cenas criadas
//crie o componente <Router></Router>

// cada rota possui as cenas, por onde o usuario é capaz de navegar
// <Scene key='chave que identifica a cena dentro do codigo' component ={Componente que esta sendo renderizada na cena (Deve ser importada!!)}>
// init => prop que define a página inicial da rota


export default class app6 extends Component {
  render() {
    return (

      <Router sceneStyle ={{paddingTop: 50}}>
      <Scene key ='principal' component ={Principal} initil/>
      <Scene key ='sobrejogo' component ={SobreJogo}/>
      <Scene key ='outrosjogos' component ={OutrosJogos}/>
      </Router>
    );
  }
}

AppRegistry.registerComponent('routerflux', () => app6);
