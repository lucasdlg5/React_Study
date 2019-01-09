import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(num) {
    /*if(num % 2 == 0) {
         return <Text style={Padrao.ex}>Par</Text>
    } else {
         return <Text style={Padrao.ex}>Impar</Text>
    }*/

    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style= {Padrao.ex}>{v}</Text>
}

export default props => 
//Usaremos interpolação
    <View>
        <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
        
        {/*parOuImpar(props.numero)*/ /*Renderização usando função*/ }
    {
        //Podemos usar também através de funcoes como acima
        
        //Renderização Condicional usando Expressão Ternario- Variavel Numero estara presente dentro de Porps
        /*props.numero % 2 == 0
        ? <Text style={Padrao.ex}>Par</Text>
        : <Text style={Padrao.ex}>Impar</Text>*/
    }
    </View>