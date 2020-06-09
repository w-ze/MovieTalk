import React, { Component } from 'react';

import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import styles from '../styles/app'


// const { itemId } = route.params;
// const { otherParam } = route.params;
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            summary: '',
            isLoading: false
        }
    }
    render() {
        return (
            this.state.isLoading ? (
                <View style={styles.detail,styles.container}>
                    <Text style={styles.summary}>{this.state.summary}</Text>
                </View>
            ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#6435c9" />
                    </View>
                )
        )
    }
    componentDidMount() {
        fetch(`http://api.douban.com/v2/movie/subject/${this.props.route.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    summary: res.summary,
                    isLoading: true
                })
            })
    }
}

export default MovieDetail