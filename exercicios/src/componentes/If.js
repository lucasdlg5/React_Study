//import React from 'react' -- Neste caso nao precisamos usar o import do REACT pois nao usamos nenhuma tag que fara a transcrição JSX

export default props => {
    if (props.test){
        return props.children //Retorna os filhos do componente. Exemplo abaixo
        /*<View style={styles.container}> -- PAI
				<Text style={styles.f20}> App! </Text> -- FILHO
				<Simples texto='Flexivel!!'/> -- FILHO
				<ParImpar numero={31} /> -- FILHO
		</View> -- PAI*/
    } else {
        return false
    }
}