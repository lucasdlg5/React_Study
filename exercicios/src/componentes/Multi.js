import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//Quando utilizamos somente o EXPORT (Sem o default) somos obrigados a nomea-lo, diferente da funcao ARROW na qual contém um nome anonimo do JS
export const Inverter = props => { //Desta maneira, sem o DEFAULT devemos IMPORTAR usando CHAVES = import { Inverter } from './componentes/Multi'
//Quando importamos por padrão, nao precisamos utilizar as chaves, ficando desta maneira:
    //export default Inverter = props => { [...] }
    //Assim, quando temos mais de uma coisa que possa ser importada de um componente, podemos selecionar utilizando Virgula no import
    const inv = props.texto.split('').reverse().join('') //Transforma em array, inverte e agrupa todos os caracteres
    return <Text style={Padrao.ex}>{inv}</Text>

}

export const MegaSena = props => {
    const [min,max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0) //Cria um Array de 6 elementos na qual todos inicializam com o numero 0
    for (let i = 0; i < numeros.length; i++){
        let novo = 0
        while (numeros.includes(novo)){ //Fara com que nao tenha repetições de numeros dentro do array
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }
    numeros.sort((a,b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}