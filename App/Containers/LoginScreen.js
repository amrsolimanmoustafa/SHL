import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView,ImageBackground,Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import LoginInsertPhone from "../Components/LoginInsertPhone.js"

// Styles
import styles from './Styles/LoginScreenStyle'
import {Images} from '../Themes';
//auth api
import Auth from '../APIs/Auth'
class LoginScreen extends Component {
  // constructor(){
  //   super()


  // }
  render () {

   let auth= new Auth
  //  console.log(auth.login())
    return <View style={styles.container}>
        <ImageBackground style={styles.loginBackground} source={Images.loginBackground} resizeMode={"cover"}>
          <View style={styles.main}>
            <Image source={Images.loginLogo} style={styles.loginLogo} />

            <View style={styles.input}>
              <LoginInsertPhone />
            </View>

            <View style={styles.allLanguages}>
              <TouchableOpacity onPress={()=>{this.base}} style={styles.languages}>
                <Text style={styles.flagTextStyle}>اردو</Text>
                <Image source={Images.IndiaFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languages}>
                <Text style={styles.flagTextStyle}>English</Text>
                <Image source={Images.USFlag} style={styles.flagStyle} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.languages}>
                <Text style={styles.flagTextStyle}>العربية</Text>
                <Image source={Images.SaudiFlag} style={styles.flagStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
export default LoginScreen;
