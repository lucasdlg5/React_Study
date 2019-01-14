

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField'
import { createMineBoard, createMinedBoard } from './src/functions'


export default class App extends Component {

constructor(props) {
  super (props)
  this.state = this.createState()
}

  minesAmaunt = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmaunt()),
    }
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text styles={styles.welcome}>Iniciando o Mines!</Text>
        <Text styles={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View styles={styles.board}>
          <MineField board={this.state.board}/>
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
