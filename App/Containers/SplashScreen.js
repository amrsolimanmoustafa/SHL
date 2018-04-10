import React, { Component } from 'react'
import { View,Image,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'


class SplashScreen extends Component {
  componentDidMount(){
    const { navigate } = this.props.navigation;
setTimeout(() => navigate("LoginScreen", {screen: "LoginScreen"}),40);

  }
  render () {
    return (
    
      <Image source ={require("../Images/Assets/Splash.png")}
      style={styles.backgroundImage}
      resizeMode={"cover"}
      />

    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
