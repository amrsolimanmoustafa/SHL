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
import OtlobNow from "../Components/OtlobNow"
import FavoritePlaces from "../Components/FavoritePlaces"
import {reverseCoordinatesToAdress} from "../../src/actions/CommonServicesActions/commonServicesActions"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";

class Map extends Component {
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
  constructor(props) {
    super(props);
  
  }

  render () {
    console.log('lat ',this.props.lat)
    return (
      <View style={styles.container}>
       <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.props.lat? this.props.lat:6.2672295570373535,
            longitude:this.props.lng? this.props.lng:31.229478498675235,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
        </MapView>
          <OtlobMain/>
          {/* <OtlobNow/> */}
          {/* <FavoritePlaces/> */}

      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    common:state.common
   }
  }
export default connect(mapStateToProps, {reverseCoordinatesToAdress }) (withNavigation(Map))
