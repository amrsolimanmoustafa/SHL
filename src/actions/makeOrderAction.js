import {  GETSERVESIES } from "../actions/types";
import Base from "../../App/APIs/Base"
import axios from 'axios';

export const getServices=(zone)=>dispatch=>{

 var base_url =new Base()
var  GETALLSERVICES_URL="http://" + base_url.baseUrl + "allserivces/"+zone+"?lang="+base_url.lang

    try {
console.log(GETALLSERVICES_URL)
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
