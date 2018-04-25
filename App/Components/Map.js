import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,Image } from 'react-native'
import styles from './Styles/MapStyle'
import MapView from 'react-native-maps';
import { Icon, Button } from 'native-base';
import {Images} from '../Themes';
import SideMapButtons from "../Components/SideMapButtons"
import MainButtons from "../Components/MainButtons"
import OtlobMain from "../Components/OtlobMain"

export default class Map extends Component {
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
       <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
        </MapView>
          <OtlobMain/>
           
      </View>
    )
  }
}
