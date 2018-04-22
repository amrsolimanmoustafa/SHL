import Base from './Base'
import axios from "axios";
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";

export default class Auth{
  constructor(){

  }
login(data,context){
  var base =new Base()
  var p;
return p=new Promise((resolve,reject)=>{


    try {
      axios
        .post("http://" + base.baseUrl + "login", data)
        .then(function(user) {
          if (user && data.phone !="") {
            console.log(user);
            context.setState({
              loading: false,
              VerifyPhoneScreen: "VerifyPhoneScreen"
            });
            context.props.navigation.navigate("VerifyPhoneScreen", user);
resolve(user)
            //  navigate(self.state.VerifyPhoneScreen);
          } else {
            context.setState({ loading: false });
          }
        })
        .catch(function(error) {
          context.setState({ loading: false });
          Toast.show("يرجي التاكد من البيانات", Toast.LONG);

          console.log(error);
        });
    } catch (error) {
      Toast.show("", Toast.LONG);

      context.setState({ loading: false });
      console.error(error);
    }



resolve()
reject()
})
}
}
