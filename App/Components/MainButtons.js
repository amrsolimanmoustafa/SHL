import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Button,TouchableOpacity,Image } from 'react-native'
import styles from './Styles/MainButtonsStyle'
import LinearGradientForMap from "../Components/LinearGradientForMap"
import { Images } from '../Themes';

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

          <View style={styles.chooseServiceView2}>
          <TouchableOpacity  style={styles.chooseServiceButton2}>
          <Image source={Images.pickup} style={styles.chooseServiceImage2}/></TouchableOpacity>
          <TouchableOpacity  style={styles.chooseServiceButton2}>
          <Image source={Images.pluming} style={styles.chooseServiceImage2}/></TouchableOpacity>
          <TouchableOpacity  style={styles.chooseServiceButton2}>
          <Image source={Images.waterconnect} style={styles.chooseServiceImage2}/></TouchableOpacity>
        </View>
        <View style={styles.chooseServiceView}>
          <TouchableOpacity  style={styles.chooseServiceButton}>
          <Image source={Images.pickup} style={styles.chooseServiceImage}/></TouchableOpacity>
          <TouchableOpacity  style={styles.chooseServiceButton}>
          <Image source={Images.pluming} style={styles.chooseServiceImage}/></TouchableOpacity>
          <TouchableOpacity  style={styles.chooseServiceButton}>
          <Image source={Images.waterconnect} style={styles.chooseServiceImage}/></TouchableOpacity>
          <TouchableOpacity  style={styles.chooseServiceButton}>
          <Image source={Images.stahat} style={styles.chooseServiceImage}/></TouchableOpacity>
        </View>
        
        <View style={styles.whenToOrderView}>
        <View style={styles.opacityView}>
         <TouchableOpacity style={styles.opacityWight}><Text style={styles.opacityWightText}>اطلب لاحقاً</Text></TouchableOpacity>
        </View>

        <View style={styles.opacityView2}>
          <LinearGradientForMap  text="اطلب الان" stylez={styles.opacity}  press={() => this.props.navigation.navigate("HomeScreen")} />
        </View>
       </View>
        
      </View>
    )
  }
}
