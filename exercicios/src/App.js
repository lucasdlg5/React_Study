import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
	render () { //Responsavel por renderizar a tela, que esse componente sera exibido
		return ( //Aqui sera retornado o JSX 
			<View style={styles.container}> 
				<Text style={styles.f20}> App! </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({ //Criar o estilo do componente
	container: { //Nome do estilo, dentro das chaves vem as propriedades
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	f20: {
		fontSize: 40 
	}
})