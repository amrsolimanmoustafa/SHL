import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,Image,TouchableOpacity } from 'react-native'
//Style
import styles from './Styles/VerifyPhoneStyle'
//Native Base Lib for UI elements
import {Form,Label,Input,Item,Radio,Right} from "native-base"
//Images
import {Images} from '../Themes';
//Linear Gradients
import  LinearGradientButton  from "../Components/LinearGradientButton";
import { withNavigation } from "react-navigation";

 class VerifyPhone extends Component {
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

                 render() {
                   return <View style={styles.container}>
                       {/* Headings */}
                       <Text style={styles.heading2}>
                         {" "}
                         تم ارسال كود التأكيد للرقم التالي{" "}
                       </Text>
                       <Text style={styles.heading}>
                         {" "}
                         +9661234568{" "}
                       </Text>

                       {/* Input */}
                       <View style={styles.inputBoxView}>
                         <Item stackedLabel style={styles.itemStyle}>
                           <Label
                             style={styles.formInputPlaceholder}
                           >
                             {" "}
                             ادخل الكود{" "}
                           </Label>
                           <Input style={styles.input} />
                         </Item>
                       </View>
                       {/* Radio Button Needs Modfication */}
                       <View style={styles.radioButton}>
                         <Radio selected={true} />
                         <Text
                           style={styles.radioButtonTextBlue}
                         >
                           الشروط و الاحكام{" "}
                         </Text>
                         <Text style={styles.radioButtonText}>
                           الموافقة علي{" "}
                         </Text>
                       </View>
                       {/* Two Linear Gradient */}
                       <View style={styles.opacity}>
                         <LinearGradientButton press={this.goToLoginScreen.bind(this)} navigateScreen="LoginScreen" text="تغيير رقم الجوال" />
                         <LinearGradientButton press={this.goToHomeScreen.bind(this)} navigateScreen="HomeScreen" text="الدخول" />
                       </View>
                     </View>;
                 }

                 goToLoginScreen() {
                   var self=this

            self.props.navigation.navigate("LoginScreen");

                 }
                       goToHomeScreen() {
                   var self=this

            self.props.navigation.navigate("HomeScreen");

                 }
               }
               export default  withNavigation(VerifyPhone)

