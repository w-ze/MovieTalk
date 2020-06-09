import React, { Component } from 'react';
import MovieDetail from './MovieDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from './MovieList';

const Stack = createStackNavigator();
export default class Features extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator initialRouteName='MovieList'>
                <Stack.Screen
                    name="MovieList"
                    component={MovieList}
                    options={{
                        title: '正在热映',
                        headerStyle: {
                            backgroundColor: 'darkslateblue'
                        },
                        headerTitleStyle: {
                            color: "#ffffff"
                        },
                    }}
                />
                <Stack.Screen
                    name="MovieDetail"
                    component={MovieDetail}
                    options={({ route }) => ({
                        title: route.params.name,
                        headerStyle: {
                            backgroundColor: 'darkslateblue'
                        },
                        headerTintColor: "rgba(255,255,255,0.8)",
                    })}
                // options={{
                //     headerStyle: {
                //         backgroundColor: 'darkslateblue'
                //     },
                //     headerTitleStyle: {
                //         color: "#ffffff"
                //     },
                // }}
                />
            </Stack.Navigator>
        )
    }
}
