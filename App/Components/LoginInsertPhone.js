import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,Image,TouchableOpacity } from 'react-native'
//Styles
import styles from './Styles/LoginInsertPhoneStyle'
//Native Base For UI Elements
import {Form,Label,Input,Item} from "native-base"
//Images
import {Images} from '../Themes';
//Two Linear Gradients
import  LinearGradientButton  from "../Components/LinearGradientButton";

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
                                    {/* Headings */}
        <Text style={styles.heading}> ادخل رقم الجوال </Text>
        <Text style={styles.heading2}>يجب تسجيل الدخول حتي تستطيع الاستفادة من تطبيق سهل</Text>

        <View style={styles.inputBoxView}>
                                      {/* Input */}
          <Item stackedLabel style={styles.itemStyle}>
                <Label style={styles.formInputPlaceholder}>رقم الهاتف</Label>
                <Input style={styles.input}/>
          </Item>
                                      {/* Flags */}
          <View style={styles.countryView}>
            <Text style={styles.countryText}> الدولة </Text>
            <Image source={Images.SaudiFlag} style={styles.countryFlag}/>
          </View>
        
        </View>
                                     {/* Linear Gradient */}
        <View style={styles.opacity}>
          <LinearGradientButton navigateScreen="VerifyPhoneScreen" text="التسجيل" style={styles.opacity}/>
        </View>
        

      </View>
    )
  }
}
