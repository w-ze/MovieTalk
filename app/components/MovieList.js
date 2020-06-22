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

class movieList extends Component {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            isLoading: true,
            start: 0,
            count: 6,
            total: 0,
            refresh: false
        }
    }
    returnUri(uri) {
        return `${uri}&start=${this.state.start}&count=${this.state.count}`
    }
    renderFooter(){
        return(
            <View>
                <ActivityIndicator size="small" color="#6435c9" />
            </View>
        )
    }
    fetchData() {
        fetch(this.returnUri('http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a'))
            .then(response => response.json())
            .then(res => {
                this.setState({
                    movieList: this.state.movieList.concat(res.subjects),
                    isLoading: false
                })
            })
    }
    onPressButton(item) {
        this.props.navigation.navigate('MovieDetail', {
            name: item.title,
            id: item.id,
        })
    }
    onEndReached() {
        // console.log('到底啦')
        // this.setState({
        //     start: 5
        // }, console.log(this.state.start))

    }
    onRefresh(){
        console.log(1)
        this.fetchData()
    }
    listTpl(item) {
        return (
            <TouchableHighlight
                activeOpacity={0.85}
                underlayColor="#rgba(0,0,0,0.1)"
                onPress={() => this.onPressButton(item)}>
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image style={styles.image} source={{ uri: item.images.small }}></Image>
                    </View>
                    <View style={styles.itemContent}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemHeader} >{item.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemMeta}>{item.original_title}{(item.year)}</Text>
                        </View>
                        <View>
                            <Text style={styles.redText}>{item.rating.average}</Text>
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
                                data={this.state.movieList}
                                keyExtractor={this._keyExtractor}
                                renderItem={({ item }) =>
                                    this.listTpl(item)
                                }
                                onRefresh={this.onRefresh.bind(this)}
                                refreshing={this.state.refresh}
                                onEndReached={()=>this.onEndReached()}
                                onEndReachedThreshold={0.1}
                                initialNumToRender={this.state.count}
                                ListFooterComponent={this.renderFooter.bind(this)}
                            >
                            </FlatList>
                        )
                }
            </View>
        )
    }
}

export default movieList