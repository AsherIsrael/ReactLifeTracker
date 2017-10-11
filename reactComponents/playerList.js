import React from 'react'
import {View, Text} from "react-native";
import PlayerLifeView from './playerLifeView'

export default class PlayerList extends React.Component{
    render() {
        let players = this.props.players.map((playerObj, idx) => {
            return (<PlayerLifeView key={idx} idx={idx} style={this.props.styles.playerLife} player={playerObj} updatePlayerLife={this.props.updatePlayerLife}/>)
        })
        return(
            <View style={this.props.styles.playerList}>
                {players}
            </View>
        )
    }
}