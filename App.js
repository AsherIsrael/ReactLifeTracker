import React from 'react';
import { Text, View } from 'react-native';
import Player from './dataTypes/Player';
import MainDisplay from './reactComponents/mainDisplay';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerList: []
    }
  }

  addPlayer = () => {
    let newPlayer = new Player(40, "Test player");
    let players = this.state.playerList;
    players.push(newPlayer);
    this.setState({playerList: players});
  }

  updatePlayerLife = (playerIdx, modifier) => {
    players = this.state.playerList;
    player = players[playerIdx];
    player.updateLifeTotal(modifier);
    players[playerIdx] = player;
    this.setState({playerList: players});
  } 

  render() {
    return (
      <MainDisplay playerList={this.state.playerList} addPlayer={this.addPlayer} updatePlayerLife={this.updatePlayerLife}/>
    );
  }
}


