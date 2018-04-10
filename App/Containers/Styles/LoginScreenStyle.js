import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:"white"
  },
  loginBackground:{
    width:"100%",
    height:"100%"
  },
  main:{
    width:"100%",
    height:"100%",

  },
  loginLogo:{
    marginLeft:"40%",
    marginTop:"4%",
  },
  input:{
    position:"absolute",
    marginTop:"45%",
    height:"45%",
    alignItems:"center",
    marginLeft:"5%",
    marginRight:"5%",
    width:"90%",
    borderWidth:0,
    borderColor:"white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    padding:0,
  },
  languages:{
    flexDirection:"row",
    width:"20%",
    marginTop:"90%",
    marginLeft:"5%",
    height:"10%",
    marginRight:"10%",
  },
  flagStyle:{
    width:"70%",
    height:"100%",
    marginRight:"10%",
    marginLeft:"0%"
  },
  flagTextStyle:{
    fontSize:17,
    color:"black",
    marginTop:"15%",
    marginRight:"0%",
    marginLeft:"0%"
  },
  allLanguages:{
    marginTop:"20%",
    flexDirection:"row",
    width:"80%",
    height:"100%",
    marginLeft:"10%"
  }

})
