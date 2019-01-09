import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default createDrawerNavigator ({
    MegaSena: {
        screen: () => 
            <View>
                <MegaSena numeros={8} />
                <Text>Teste</Text>
            </View>,
            navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo"' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!' />
        //É possivel fazer a chamada do componente da seguinte forma também:
        //screen: () => Simples
        //Como este componente depende de valores dos parametros que passamos, ele virá vazio na tela.
    }
}, {drawerWidth: 300})