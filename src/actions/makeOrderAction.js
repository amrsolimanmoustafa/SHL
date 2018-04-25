import {  GETSERVESIES } from "../actions/types";
import Base from "../../App/APIs/Base"
import axios from 'axios';

export const getServices=()=>dispatch=>{

 var base_url =new Base()
var  GETALLSERVICES_URL="http://" + base_url.baseUrl + "allserivces?lang="+base_url.lang

    try {

      axios
        .get(GETALLSERVICES_URL)
        .then((services) =>{
    dispatch({
    type:GETSERVESIES,
    payload:services
  }) 
}).catch(function(error) {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }

}
