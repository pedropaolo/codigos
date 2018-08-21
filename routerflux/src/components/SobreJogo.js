import React, { Component } from 'react';
import { Text , Button , View} from 'react-native';

export default class SobreJogo extends Component<Props> {

	erasetext = () =>{

    this.setState(
      {numero: 12}
    );

  }

	state = {

		numero: 5
	}

	render() {
		return (
			<View>
			<Text style={{ flex: 1, backgroundColor: '#61BD8C' }}>
			Aqui podem ser apresentadas informações sobre o jogo
			</Text>

			<Text>{this.state.numero}</Text>

			<Button
			onPress={this.erasetext}
			title="Learn More"
			color="#841584"
			/>
			</View>



		);
	}
}
