import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{ Component } from 'react';
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
import Search from './app/components/Search';
import User from './app/components/User';
import Redux from './app/components/Redux';
import TabNavigator from 'react-native-tab-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
// const Tab = createMaterialTopTabNavigator();

import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from "./app/store/reducers"
import thunk from 'redux-thunk'

let store = createStore(reducers,applyMiddleware(thunk))


const Tab = createBottomTabNavigator();

const TabBarIcon1 = (focused, color) => {
    return (
        <Icon name={focused ? "star" : "star-o"} size={focused ? 32 : 32} color={color} />
    );
};
const TabBarIcon2 = (focused, color) => {
    return (
        <Icon name={focused ? "calendar" : "calendar-o"} size={focused ? 32 : 32} color={color} />
    );
};
const TabBarIcon3 = (focused, color) => {
    return (
        <Icon name={focused ? "search" : "search"} size={focused ? 32 : 32} color={color} />
    );
};
const TabBarIcon4 = (focused, color) => {
    return (
        <Icon name={focused ? "user" : "user-o"} size={focused ? 32 : 32} color={color} />
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'features'
        }
    }
    // tabPress(selected, title) {
    //     this.setState({ selected: selected })
    // }


    render() {
        return (
            <Provider store={store}>
                <StatusBar backgroundColor="darkslateblue" />
                {/* <SafeAreaView style={styles.safeAreaView}> */}
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Tab.Navigator
                            tabBarOptions={{ activeTintColor: 'darkslateblue', inactiveTintColor: '#999',tabStyle:{backgroundColor:"#eaeefe"}}}
                            screenOptions={({route})=>({
                                tabBarIcon: ({ focused, color }) => {
                                    if(route.name === 'Features'){
                                        return TabBarIcon1(focused, color);
                                    }else if(route.name === 'BoxOffice'){
                                        return TabBarIcon2(focused, color);
                                    } else if(route.name === 'Search'){
                                        return TabBarIcon3(focused, color);
                                    } else {
                                        return TabBarIcon4(focused, color);
                                    }
                                },
                            })}
                        >
                            <Tab.Screen name="Features" component={Features} options={{ title: '正在热映' }} />
                            <Tab.Screen name="BoxOffice" component={BoxOffice} options={{ title: '北美票房' }} />
                            <Tab.Screen name="Search" component={Search} options={{ title: '搜索' }} />
                            <Tab.Screen name="User" component={User} options={{ title: '我的' }} />
                            <Tab.Screen name="Redux" component={Redux} options={{ title: 'Redux' }} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </View>

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
             </Provider>
        );
    }

};



const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
});




export default App;
