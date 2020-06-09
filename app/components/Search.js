import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SearchForm from './SearchForm';

const Stack = createStackNavigator();
class Search extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='SearchForm'>
                <Stack.Screen
                    name="SearchForm"
                    component={SearchForm}
                    options={{
                        title: '搜索',
                        headerStyle: {
                            backgroundColor: 'darkslateblue'
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                    }}
                />
            </Stack.Navigator>
            
        )
    }
}

export default Search