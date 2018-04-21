/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Input,View } from "react-native";
import {connect}from 'react-redux'
import {fetchPosts} from '../../actions/postActions'
 class AppR extends Component {
    //  componentWillMount(){
    //     //  this.props.fetchPosts();
    //     //  console.log('1')
    //  }
  render() {
    return (
        <View>
        <Input/>
        </View>
    );
  }
}
export default connect(null,{fetchPosts})(AppR)