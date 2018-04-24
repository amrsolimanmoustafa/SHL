import { FETCH_POSTS, NEW_POSTS } from "../actions/types";
import Base from "../../App/APIs/Base"
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Toast from "react-native-simple-toast";
import Auth from "../../App/APIs/Auth";
export const loginUser=(user,context)=>dispatch=>{
  let auth = new Auth();
  let base = new Base();
  // let data = { phone: user.phone, token_id: user.token_id, lang_id: base.lang };
  auth.login(user,context).then(userloged=>dispatch({
    type:LOGIN,
    payload:userloged
  }))
}
