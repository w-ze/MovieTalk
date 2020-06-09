import React, { Component } from 'react';

import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from "react-native"

export default class Basic4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={{ uri: 'https://img9.doubanio.com/dae/niffler/niffler/images/bc181fca-48da-11ea-af67-8ac79e38c4d6.jpg' }}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.overlayHeader}>机器总动员</Text>
                        <Text style={styles.overlaySubHeader}>ddd</Text>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eae7ff"
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        alignItems: "center"
    },
    overlayHeader: {
        fontSize: 13,
        fontFamily: 'Helvetica',
        color: "#eae7ff",
        padding: 10
    },
    overlaySubHeader: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: '200',
        padding: 10,
        paddingTop: 0,
        color: '#eae7ff'
    }
})