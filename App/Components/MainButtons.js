import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Button,TouchableOpacity } from 'react-native'
import styles from './Styles/MainButtonsStyle'
import LinearGradientButton from "../Components/LinearGradientButton"

export default class MainButtons extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        
        <View style={styles.opacityView}>
         <TouchableOpacity style={styles.opacityWight}><Text style={styles.opacityWightText}>اطلب لاحقاً</Text></TouchableOpacity>
        </View>

        <View style={styles.opacityView2}>
          <LinearGradientButton navigateScreen="VerifyPhoneScreen" text="اطلب الان" stylez={styles.opacity}/>
        </View>
       
        
      </View>
    )
  }
}
