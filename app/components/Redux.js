import React, { Component } from 'react';

import {
    View,
    Text,
    Button
} from 'react-native'

import { connect } from 'react-redux';
import actions from '../store/actions/index'
class Redux extends Component {
    constructor() {
        super();
        this.state = {
            count:1
        }
        this.count = 1;
    }

    increase() {
        // 1、选购商品
        // this.props.dispatch({type:"INC",data:{count:++this.count}})
        // this.props.dispatch(actions.counter.inc({count:++this.count}))
        this.props.dispatch((dispatch, getState) => {
            console.log(getState().counter.count);
            dispatch(actions.counter.inc({ count: ++this.count }))
        })
    }

    decrease() {
        // this.props.dispatch({type:"DEC",data:{count:this.count>1?--this.count:1}})
        this.props.dispatch(actions.counter.dec({ count: this.count > 1 ? --this.count : 1 }))

    }

    login() {
        this.props.dispatch(actions.login.login({ status: "success" }))
    }

    logout() {
        this.props.dispatch((dispatch, getState) => {
            dispatch(actions.login.logout({ status: "fail" }))
        })
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 120 }}>
                <Button onPress={this.decrease.bind(this)} title="-"></Button>
                <Text style={{ textAlign: 'center' }}>{this.props.state.counter.count}</Text>
                <Button onPress={this.increase.bind(this)} title="+"></Button>
                <Text style={{ textAlign: 'center' }}>{this.props.state.login.status}</Text>
                <Button onPress={this.login.bind(this)} title="login"></Button>
                <Button onPress={this.logout.bind(this)} title="logout"></Button>
            </View>
        )
    }
}

// 高阶函数
export default connect((state) => {
    // console.log(state);
    return {
        state
    };
})(Redux);
