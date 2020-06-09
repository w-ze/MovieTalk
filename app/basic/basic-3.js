import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native"

export default class Basic3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={{ uri: 'https://img1.doubanio.com/dae/niffler/niffler/images/6cf22398-757e-11ea-8774-fea672b52f7a.jpg' }}
                >
                    {/* <Text>ddd</Text> */}
                </Image>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        backgroundColor:"#eae7ff"
    }
})