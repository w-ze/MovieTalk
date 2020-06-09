import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import USBox from './USBox';

const Stack = createStackNavigator();
export default class BoxOffice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'features'
        }
    }

    render() {
        return (
            <Stack.Navigator initialRouteName='USBox'>
                <Stack.Screen
                    name="USBox"
                    component={USBox}
                    options={{
                        title: '北美票房',
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
