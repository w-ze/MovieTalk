import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from "react-native"

export default class Basic1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item]}>
                    <Text style={styles.itemText}>1</Text>
                </View>
                <View style={[styles.item]}>
                    <Text style={styles.itemText}>2</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemText}>3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eae7ff",
        flex: 1,
        padding: 6,
        alignItems:'flex-start',
        flexDirection:'row'
    },
    item: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: '#6435c9',
        marginVertical: 6,
        width: 100
    },
    itemOne: {
        position: 'absolute',
        left: 30,
        zIndex: 1
    },
    itemTwo: {
        alignSelf: 'center'
    },
    itemText: {
        fontSize: 33,
        textAlign: 'center',
        fontWeight: '700'
    }
})