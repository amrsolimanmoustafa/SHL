import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,Image } from 'react-native'
import styles from './Styles/HeaderStyle'
import  { Button,Icon } from "native-base"
import {Images} from '../Themes';
import {withNavigation} from "react-navigation"
 
export default class Header extends Component {
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
        <View style={styles.component}>
          <Button style={styles.headerButton} transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
            <Icon name="md-settings" type="Ionicons" style={styles.Icon}/>
          </Button>
        </View>
        <View style={styles.componentCenter}>
          <Image source={Images.logoCenter}/>
        </View>
        <View style={styles.component}>
          <Button style={styles.headerButton2} transparent onPress={()=>this.props.navigation.navigate("DrawerRightOpen")}>
            <Image source={Images.User}/>
          </Button>
        </View>
      </View>
    )
  }
}
