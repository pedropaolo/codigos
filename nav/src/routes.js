import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';



// importando componentes criados em cada página individual

import  Teste from './pages/teste';
import  Teste2 from './pages/teste2';
import  Teste3 from './pages/teste3';


const Route = StackNavigator(
  {
  // nome da rota para aplicação
  // screen: atributo obrigatorio, define o compnente que sera renderizado na nova tela,
  // no caso sera o componente welcome, criado no diretorio pages
  Welcome: {screen : Teste},


  Twelcome: {screen: TabNavigator(
    {
      Tabone: {screen: Teste2},
      Tabtwo: {screen:Teste3}
    }
  )},

  }


);

export default Route;
