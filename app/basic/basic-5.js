import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from "react-native"

export default class Basic4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.images.large }}
                            >
                            </Image>
                            <View style={styles.overlay}>
                                <Text style={styles.overlayHeader}>{item.title}</Text>
                                <Text style={styles.overlaySubHeader}>{item.year}</Text>
                            </View>
                        </View>
                    }
                >
                </FlatList>
            </View>
        )
    }
    componentDidMount() {
        fetch('http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    dataSource: res.subjects
                })
                console.log(res)
            })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eae7ff"
    },
    item: {
        width: '100%',
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 150,
        resizeMode:'contain'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        alignItems: "center",
        flex: 1
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