import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/OtlobMainStyle'
import SideMapButtons from "../Components/SideMapButtons"
import MainButtons from "../Components/MainButtons"
import SearchButton from "../Components/SearchButton"
export default class OtlobMain extends Component {

  render () {
    return (
      <View style={styles.container}>
          <SearchButton/>
          <SideMapButtons/>
          <MainButtons/>
      </View>
    )
  }
}
