'use strict';
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import styles from './Styles/MainButtonsStyle'
import LinearGradientForMap from "../Components/LinearGradientForMap"
import { Images } from '../Themes';
import Base from '../APIs/Base'

import {getServices} from "../../src/actions/makeOrderAction"
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'

import * as Animatable from "react-native-animatable";

  class MainButtons extends Component {

state={secondryServiceIcons:[],showMainServices:false}
constructor(props) {
  super(props);
MainButtons = Animatable.createAnimatableComponent(MainButtons);

}
secondryServeciesButtons_View=()=>{
  console.log(this.state.secondryServiceIcons)
  let base=new Base
var self=this

    return
    self.state.secondryServiceIcons.map((seCservice,index) => (
      <TouchableOpacity key={index} style={styles.chooseServiceButton2}>
        <Image
          source={{ uri: base.icon_url + seCservice["icone"] }}
          style={styles.chooseServiceImage2}
        />
      </TouchableOpacity>
    ));
  }
  renderSecondryIcons(secSrvs){
    console.log(secSrvs.sup_serivces_data)
    this.setState({secondryServiceIcons:secSrvs.sup_serivces_data})
      }
  mainServeciesButtons_View = () =>{
    let base=new Base
    if(this.state.showMainServices)
    return this.props.service.map((mainservice, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.renderSecondryIcons(mainservice)}
        style={styles.chooseServiceButton}
      >
        <Animatable.Image
          animation="zoomIn"
          iterationCount={1}
          direction="alternate"
          source={{ uri: base.icon_url + mainservice["icone"] }}
          style={styles.chooseServiceImage}
        />
      </TouchableOpacity>
    ));

}

orderButtons_View=()=>{

return  <View style={styles.whenToOrderView}>
   <View style={styles.opacityView}>
    <TouchableOpacity style={styles.opacityWight}><Text style={styles.opacityWightText}>اطلب لاحقاً</Text></TouchableOpacity>
   </View>

   <View style={styles.opacityView2}>
     <LinearGradientForMap  text="اطلب الان" stylez={styles.opacity}  press={() => this.setState({showMainServices:true})} />
   </View>
  </View>}

  //componnent render//
  render () {
    return <View style={styles.container}>
        <View style={styles.chooseServiceView}>
          {this.secondryServeciesButtons_View()}
        </View>
        <View style={styles.chooseServiceView}>
          <ScrollView showsHorizontalScrollIndicator={false}   horizontal={true}>
            <View style={styles.scrollViewServices}>
              {this.mainServeciesButtons_View()}
            </View>
          </ScrollView>
        </View>

        {this.orderButtons_View()}
      </View>;
  }
}
//===============================//
const mapStateToProps = state => {
  console.log(state.makeOrder.service)
    return {
      services:state.makeOrder.services.data,
      service:state.makeOrder.service }
    }
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  export default connect(mapStateToProps, { getServices }) (withNavigation(MainButtons))
