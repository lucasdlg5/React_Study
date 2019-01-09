import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{fontSize: 35 }}>
        {props.label /* || 'Opa' //Uma das formas Caso o valor seja Undefined/Null, irá utilizar o valor OPA. Podemos utilizar o defaultProps*/}
        {props.ano + 2000}
    </Text>

//Definindo valores defaults caso nao seja passado os valores
    ValidarProps.defaultProps = {
        label: 'Ano: '
    }

    ValidarProps.propTypes = {
        ano: PropTypes.number.isRequired //Aqui é definido que este valor será do tipo numerico e é requirido preencher.
    }

    export default ValidarProps