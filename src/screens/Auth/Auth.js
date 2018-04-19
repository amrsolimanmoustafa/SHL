import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet,ImageBackground } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground"
import beautiful from "../../assets/beautiful-place.jpg"

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
    // startMainTabs();
  };



  render() {
    return <ImageBackground source={beautiful} style={styles.imageBackground}>
        <View style={styles.container}>
          <MainText>
            {/* <HeadingText>Please Log In</HeadingText> */}
          </MainText>
          <ButtonWithBackground color="#eee" style={[styles.button]}>
            {" "}
            go to Login !{" "}
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonWithBackground color="#eee" style={[styles.button]} onPress={this.loginHandler}>
            submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>;
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  imageBackground: {
    flex: 1,
    width: "100%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
