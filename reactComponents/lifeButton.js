import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";


export default class LifeButton extends React.Component{    

    render() {
        return(
            <TouchableOpacity style={this.props.styles.lifeButton} onPress={() => {this.props.updatePlayerLife(this.props.idx, this.props.modifier)}}>
                <Text>
                    {this.props.displayText}
                </Text>
            </TouchableOpacity>
        )
    }

}