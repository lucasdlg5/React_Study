import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contador'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import  TextoSincronizado  from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
export default createDrawerNavigator ({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps /*label="Teste: "*/ ano={18} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () =><Contador numeroInicial={1000}/>
        //screen: () =><Contador/>
    },
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