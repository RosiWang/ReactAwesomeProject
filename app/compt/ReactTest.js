import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LoginView extends Component {
    render() {
        return (
                <Text style={styles.text}>login view test</Text>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 30,
    }

});

// 输出，这里千万别忘记
// module.exports = LoginView;
