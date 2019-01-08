import React from 'react'; //Sempre que vamos usar o JSX o react deve estar presente dentro do import
import { Text, View } from 'react-native';

//Duas maneiras de se declarar o export: Comum
//export default function (props) { 

//Utilizando Arrow: 
//export default (props) => { 
//export default props => { //Tambem funciona

//Codigo Original - Basta descomentar aqui

export default props => { //É aconselhavel caso utlize parametro, chamar de PROPS utilizado para acessar as propriedades fora do componente
    //Quando utilizado o parametro, ele virá em forma de objeto, tendo que acessa-lo da seguinte forma dentro da tag: <Text>{props.nome_var}</Text>
    //return <Text>{props.texto}</Text> 
    return <Text>Arrow: Simples! {props.texto}</Text> //Pode se utilizar interpolação entre o texto
}

//Função com return implicita, o mesmo do de cima, porém desta forma nao deixa utilizar mais de 1 componente (varios textos etc), tendo que encapsula-los como abaixo

//Correto
//export default props => 
//    <Text>Arrow: Simples! {props.texto}</Text> 

//Errado
/*export default props => 
    <Text>Arrow: Simples! {props.texto}</Text>
    <Text>Arrow: Simples! {props.texto}</Text>*/

//Correto Encapsulado
/*export default props => 
    <View>
        <Text>Arrow 1: Simples! {props.texto}</Text>
        <Text>Arrow 2: Simples! {props.texto}</Text> 
    </View>*/

//Utilizando Array sem utilizar View
/*export default props => [
    <Text key={1}>Arrow 1: Simples! {props.texto}</Text>,
    <Text key={2}>Arrow 2: Simples! {props.texto}</Text> 
]*/