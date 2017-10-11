import React from "react";
import {View, Text} from "react-native";
import LifeButton from "./lifeButton";

export default class PlayerModal extends React.Component {
    render() {
        return (
            <View style={this.props.styles.modal}>
                <Text style={[this.props.styles.lifeColor, this.props.styles.modalLife]}>
                    {this.props.player.lifeTotal}
                </Text>
                <LifeButton styles={this.props.styles} displayText={"+1"} updatePlayerLife={this.props.updatePlayerLife} idx={this.props.idx} modifier={1}/>
                <LifeButton styles={this.props.styles} displayText={"-1"} updatePlayerLife={this.props.updatePlayerLife} idx={this.props.idx} modifier={-1}/>
                <LifeButton styles={this.props.styles} displayText={"+5"} updatePlayerLife={this.props.updatePlayerLife} idx={this.props.idx} modifier={5}/>
                <LifeButton styles={this.props.styles} displayText={"-5"} updatePlayerLife={this.props.updatePlayerLife} idx={this.props.idx} modifier={-5}/>
            </View>
        )
    }
}