import React from 'react'
import { Text, View,TouchableOpacity, StyleSheet } from "react-native";
export default (buttonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color },props.style]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
));


const styles=StyleSheet.create({
button:{
    
    margin: 5,
    padding: 10
}
})
// export default buttonWithBackground;