import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,Image } from 'react-native'
import styles from './Styles/LoginInsertPhoneStyle'
import {Form,Label,Input,Item} from "native-base"
import {Images} from '../Themes';
import LinearGradient from "react-native-linear-gradient"

export default class LoginInsertPhone extends Component {
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
        <Text style={styles.heading}> ادخل رقم الجوال </Text>
        <Text style={styles.heading2}>يجب تسجيل الدخول حتي تستطيع الاستفادة من تطبيق سهل</Text>

        <View style={styles.inputBoxView}>

         <Item stackedLabel style={styles.itemStyle}>
              <Label style={styles.formInputPlaceholder}>رقم الهاتف</Label>
              <Input style={styles.input}/>
            </Item>
          <View style={styles.countryView}>
            <Text style={styles.countryText}> الدولة </Text>
            <Image source={Images.SaudiFlag} style={styles.countryFlag}/>
          </View>
        
        </View>
          <LinearGradient
              start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                     locations={[0,0.5,0.9]}
                     colors={['rgb(57,180,76)', '#299386', 'rgb(29,122,179)']}
                    style={styles.linearGradient}>
           <Text style={styles.buttonText}>
           التسجيل
             </Text>
          </LinearGradient>

        

      </View>
    )
  }
}
