import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import PlayerList from './playerList'

export default class MainDisplay extends React.Component{
    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addPlayerButton} activeOpacity={0.5}  onPress={() => this.props.addPlayer()} >
                <Text style={styles.buttonText}>
                    Add Player
                </Text>
            </TouchableOpacity>
            <PlayerList styles={styles} players={this.props.playerList} updatePlayerLife={this.props.updatePlayerLife}/>
      </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      paddingTop: 30
    },
    playerLife: {
      borderWidth: 1,
      width: '50%',
      height: '9%'
    },
    addPlayerButton: {
      height: '6%',
      width: '25%',
      backgroundColor: '#33ccff',
      justifyContent: 'center'
    },
    playerList: {
      flex: 8,
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%'
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'center'
    }
  });