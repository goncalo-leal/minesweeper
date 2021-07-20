/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import params from './src/params';
import functions, { createMinedBoard } from './src/functions';
import MineField from './src/components/MineField';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),

    };
  };

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.title}>MineSweeper</Text>

        <MineField board={this.state} />

        <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEC751',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default App;
