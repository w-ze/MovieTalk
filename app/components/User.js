import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserPage from './UserPage'
import {
    View,
    Text,
} from 'react-native'
const Stack = createStackNavigator();

class User extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='User'>
                <Stack.Screen
                    name="User"
                    component={UserPage}
                    options={{
                        title: '我的',
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

export default User