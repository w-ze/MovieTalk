import 'react-native-gesture-handler';
import * as React from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import Features from './app/components/Features';
import MovieList from './app/components/MovieList';
import USBox from './app/components/USBox';
import BoxOffice from './app/components/BoxOffice';
import TabNavigator from 'react-native-tab-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'features'
        }
    }
    tabPress(selected, title) {
        this.setState({ selected: selected })
    }

    render() {
        return (
            <>
                {/* <StatusBar barStyle="light-content" backgroundColor="darkslateblue" /> */}
                {/* <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={MovieList} />
                    </Stack.Navigator>
                </NavigationContainer> */}
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={MovieList}  options={{title: '首页'}}/>
                        <Tab.Screen name="Settings" component={USBox} options={{title: '首页'}}/>
                    </Tab.Navigator>
                </NavigationContainer>
                {/* <SafeAreaView style={styles.safeAreaView}> */}
                {/* <TabNavigator tabBarStyle={{ backgroundColor: "darkslateblue", paddingBottom: 34, height: 83 }}>
                    <TabNavigator.Item
                        title="正在热映"
                        titleStyle={{ color: "rgba(255,255,255,0.5)" }}
                        selectedTitleStyle={{ color: '#fff' }}
                        renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('./app/assets/image/features.png')}></Image>}
                        renderSelectedIcon={() => <Image style={{ width: 30, height: 30 }} source={require('./app/assets/image/featuresActive.png')}></Image>}
                        selected={this.state.selected === 'features'}
                        onPress={this.tabPress.bind(this, 'features', '正在热映')}
                        style={{ paddingBottom: 20 }}
                    >
                        <View style={{ flex: 1 }}>
                            <Features></Features>
                        </View>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="票房"
                        titleStyle={{ color: "rgba(255,255,255,0.5)" }}
                        selectedTitleStyle={{ color: '#fff' }}
                        renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('./app/assets/image/USBox.png')}></Image>}
                        renderSelectedIcon={() => <Image style={{ width: 30, height: 30 }} source={require('./app/assets/image/USBoxActive.png')}></Image>}
                        selected={this.state.selected === 'USBox'}
                        onPress={this.tabPress.bind(this, 'USBox', '北美票房')}
                        style={{ paddingBottom: 20 }}
                    >
                        <BoxOffice></BoxOffice>
                    </TabNavigator.Item>
                </TabNavigator> */}

                {/* </SafeAreaView> */}
            </>
        );
    }

};



const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
});




export default App;
