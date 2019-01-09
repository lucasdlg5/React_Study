import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
export default class App extends Component {
	render () { //Responsavel por renderizar a tela, que esse componente sera exibido
		return ( //Aqui sera retornado o JSX 

			/*
			Para as TAGS, pode-se usar de duas maneiras os componentes:
			<Simples></Simples> 

			<Simples/>

			Passando propriedade para os componentes
			Caso esteja utilizando componente funcional, é necessario fornecer parametros
			<Simples var='Texto'/>
			*/
			<View style={styles.container}> 
				<Text style={styles.f20}> App! </Text>
				<Simples texto='Flexivel!!'/>
				<ParImpar numero={30} />
				<Inverter texto='React Nativo!' />
				<MegaSena numeros={6}/>
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
		fontSize: 40,
		
	}
})