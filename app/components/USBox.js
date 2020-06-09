import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native'
import styles from '../styles/app'

class USBox extends Component {
    _keyExtractor = (item, index) => index.toString();
    constructor(props) {
        super(props);
        this.state = {
            usbox: [],
            isLoading: true
        }
    }
    fetchData() {
        fetch('http://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.setState({
                    usbox: res.subjects,
                    isLoading: false
                })
            })
    }
    onPressButton(){
        console.log(111)
    }
    listTpl(item) {
        return (
            <TouchableHighlight
                activeOpacity={0.85}
                underlayColor="#rgba(0,0,0,0.1)"
                onPress={() => this.onPressButton()}>
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image style={styles.image} source={{ uri: item.subject.images.small }}></Image>
                    </View>
                    <View style={styles.itemContent}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemHeader} >{item.subject.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemMeta}>{item.subject.original_title}{(item.year)}</Text>
                        </View>
                        <View>
                            <Text style={styles.redText}>{item.subject.rating.average}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading ? (
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#6435c9" />
                        </View>
                    ) : (
                            <FlatList
                                data={this.state.usbox}
                                keyExtractor={this._keyExtractor}
                                renderItem={({ item }) =>
                                    this.listTpl(item)
                                }
                            >
                            </FlatList>
                        )
                }
            </View>
        )
    }
}

export default USBox