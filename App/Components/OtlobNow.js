import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/OtlobNowStyle'
import SearchButton from "../Components/SearchButton"
import SideMapButtonsForOtlobNow from "../Components/SideMapButtonsForOtlobNow"
import SelectedServices from "../Components/SelectedServices"
import PriceLinearGradient from "../Components/PriceLinearGradient"
export default class OtlobNow extends Component {
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
        <SearchButton/>
        <View style={styles.main}>
          <SelectedServices/>
          <SideMapButtonsForOtlobNow/>
        </View>
        <PriceLinearGradient text="تأكيد"/>
      </View>
    )
  }
}
