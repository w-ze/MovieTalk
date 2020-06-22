import React, { Component, useState } from 'react';
import { WebView } from 'react-native-webview';
import {
    View,
    Text,
    Button,
    TouchableHighlight,
    DatePickerIOS,
    Modal,
    StyleSheet,
    Picker,
    Slider
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Swiper from 'react-native-swiper'


class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            date: new Date(),
            modalVisible: false,
            selectedValue: 'java'
        };

    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setDate(event, date) {
        console.log(date)
        this.setState({ date: date })
    }

    onNavigationStateChange(state) {
        console.log(state)
    }
    onPressLearnMore() {

    }
    _onPressButton() {
        alert('button')
    }
    setSelectedValue(itemValue) {
        this.setState({
            selectedValue: itemValue
        })
    }
    onValueChange(value) {
        console.log(value)
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Button
                    onPress={this.onPressLearnMore.bind(this)}
                    title="Learn More"
                    color="#841584"
                    style={{ borderWidth: 1, borderColor: '#f00' }}
                    accessibilityLabel="Learn more about this purple button"
                />
                <TouchableHighlight onPress={this._onPressButton.bind(this)} style={{ width: 200, height: 40, borderWidth: 1, borderColor: "#f00", borderRadius: 5 }}>
                    <View style={{ flex: 1, backgroundColor: "#f00" }}>
                        <Text style={{ textAlign: 'center', lineHeight: 40 }}>button</Text>
                    </View>
                </TouchableHighlight>
                <DateTimePicker
                    value={this.state.date}
                    testID="dateTimePicker"
                    mode="date"
                    display="default"
                    onChange={this.setDate.bind(this)}
                    locale="zh_CN"
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </TouchableHighlight>
                <View style={{ flexDirection: 'row' }}>
                    <Picker
                        selectedValue={this.state.selectedValue}
                        style={{ width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.selectedValue}
                        style={{ width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View>
                    <Slider value={3} maximumValue={10} onValueChange={this.onValueChange.bind(this)}></Slider>
                </View>

                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                {/* <Picker
                    selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
            </View>

            // <WebView
            //     // source={{ html: '<div style="font-size:40px">我在</div>',originWhitelist:'*' }}
            //     source={{ uri: 'https://baidu.com',originWhitelist:'*' }}
            //     onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            // />
        )
    }

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //   marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});


export default UserPage