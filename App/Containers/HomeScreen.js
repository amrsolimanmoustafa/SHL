import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import {Images} from '../Themes';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import Header from "../Components/Header"
import Map from '../Components/Map';


class HomeScreen extends Component {
 


  render() {
    return (
      <View style={styles.container}>
       <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={'cover'}>
        <Header/>
        
        <View style={styles.Map}>
          <Map/>
        </View>

       </ImageBackground> 
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
