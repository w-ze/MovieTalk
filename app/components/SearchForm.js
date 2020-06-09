import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput
} from 'react-native'
import styles from '../styles/app'



class SearchForm extends Component {
    onPressButton(keywords) {
        this.props.navigation.navigate('MovieList', {
            title: keywords,
            uri:`http://api.douban.com/v2/movie/search?q=${keywords}&&apikey=0df993c66c0c636e29ecbb5344252a4a`
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder="搜索..."
                    clearButtonMode="while-editing"
                    placeholderTextColor="rgba(100,53,201,0.3)"
                    returnKeyType="search"
                    selectionColor="rgba(100,53,201,0.3)"
                    autoFocus
                    enablesReturnKeyAutomatically
                    onSubmitEditing={(event)=>{
                        this.onPressButton(event.nativeEvent.text)
                    }}
                />
            </View>
        )
    }
}

export default SearchForm