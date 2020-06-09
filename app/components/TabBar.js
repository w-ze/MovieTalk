import React, { Component } from 'react';

import {
    View,
    Text,
    Image
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import icons from '../assets/icons'
import MovieList from './MovieList';

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "features"
        }
    }
    render() {
        return (
            <View>
                <TabNavigator>
                    <TabNavigator.Item
                        title="首页"
                        renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('../assets/image/features.png')}></Image>}
                        renderSelectedIcon={ () => <Image style={{ width: 30, height: 30 }} source={ require('../assets/image/featuresActive.png') }></Image>}
                        selected={ this.state.selected === 'features'}
                        onPress={ () => console.log(12) }
                    >
                        <View style={{flex:1}}>
                           <MovieList></MovieList> 
                        </View>
                        
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="首页"
                        renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('../assets/image/features.png')}></Image>}
                        renderSelectedIcon={ () => <Image style={{ width: 30, height: 30 }} source={ require('../assets/image/featuresActive.png') }></Image>}
                        selected={ this.state.selected === 'features'}
                        onPress={ () => console.log(12) }
                    >
                        <View><Text>123</Text></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View >
        )
    }
}

export default TabBar