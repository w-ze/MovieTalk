import React, { Component } from 'react';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae7ff'
    },
    item: {
        flexDirection: 'row',
        padding: 6,
        borderColor: 'rgba(100,53,201,0.1)',
        borderBottomWidth: 1
    },
    itemImage: {
        width: 99,
        height: 138
    },
    image: {
        width: 99,
        height: '100%'
    },
    itemContent: {
        flex: 1,
        padding: 6
    },
    itemHeader: {
        fontSize: 18,
        fontFamily: 'HElvetica',
        fontWeight: '300',
        color: '#6435c9',
    },
    itemMeta: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 6
    },
    redText: {
        fontSize: 15,
        color: '#db2828'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
    },
    detail: {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6
    },
    summary: {
        fontSize: 16,
        lineHeight: 20
    },
    textinput: {
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor:"rgba(100,53,201,0.3)",
    }
})

export { styles as default }