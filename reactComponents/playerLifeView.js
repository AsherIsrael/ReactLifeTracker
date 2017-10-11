import React from "react";
import {View, Text, StyleSheet, Modal, TouchableHighlight, Button} from "react-native";
// import LifeButton from "./lifeButton";
import PlayerModal from "./playerModal";


export default class PlayerLifeView extends React.Component{    
    state = {
        displayModal: false
    }

    alternateModal = (visible) => {
        this.setState({displayModal: visible})
    }
    render() {
        let lifeColor = styles.lifeLow;
        let life = this.props.player.lifeTotal;
        if(life > 40){
            lifeColor = styles.lifeHigh;
        }else if(life > 25){
            lifeColor = styles.lifeNormal;
        }else if(life > 10){
            lifeColor = styles.lifeFalling;
        }
        return(
            <View style={this.props.style}>
                <Modal animationType='slide' transparent={false} visible={this.state.displayModal} onRequestClose={() => {this.alternateModal(false)}}>
                    <PlayerModal alternateModal={this.alternateModal} player={this.props.player} styles={styles} lifeColor={lifeColor} updatePlayerLife={this.props.updatePlayerLife} idx={this.props.idx}/>
                </Modal>
                <TouchableHighlight style={styles.textContainer} onPress={() => this.alternateModal(true)}>
                    <View style={styles.textContainer}>
                        <Text style={[lifeColor, styles.lifeDisplay]}>
                            {this.props.player.lifeTotal}
                        </Text>
                        <Text style={styles.nameStyle}>
                            {this.props.player.name}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        flexDirection: 'row'
    },
    lifeDisplay: {
        fontSize: 30,
        width: '30%',
        paddingLeft: '5%'
    },
    lifeHigh: {
        color: '#0000ff'
    },
    lifeNormal: {
        color: '#00cc00'
    },
    lifeFalling: {
        color: '#ffcc00'
    },
    lifeLow: {
        color: '#ff0000'
    },
    nameStyle: {
        textAlignVertical: 'top',
        textAlign: 'center',
        fontSize: 15,
        width: '70%',
        paddingRight: '5%'
    },
    modalLife: {
        fontSize: 60
    },
    modal: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    lifeButton: {
        width: '15%',
        justifyContent: 'center',
        paddingTop: '10%'
    }
  });