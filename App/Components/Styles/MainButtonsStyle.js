import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop:"10%",
    flexDirection:"column",
    alignItems:"center",
    height:"100%",
  },
  whenToOrderView:{
    flexDirection:"row",
    alignItems:"center",
    height:"25%",
    marginTop:"3%"
  },
  opacityView:{
    marginTop:"0%",
    borderRadius: 100,
    width:"45%",
    height:"90%",
    marginLeft:"10%",
    elevation :10

  },
  opacityView2:{
    marginTop:"0%",
    borderRadius: 100,
    width:"45%",
    height:"90%",
    marginRight:"10%",
    elevation:10,
    marginLeft:"5%"


  },
  opacity: {
    marginTop:"0%",
    borderRadius: 80,
    width:"100%",
    height:"100%",
    alignItems:"center",
  },
  opacityWight: {
    marginTop:"0%",
    borderRadius: 80,
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    alignItems:"center",
    marginLeft:"0%"
  },
  opacityWightText:{
    marginTop:"8%",
    fontSize:18
  },
  chooseServiceView:{
    height:"30%",
    width:"80%",
    flexDirection:"row",
    backgroundColor:"#rgba(255, 255, 255, 0.4)",
    borderRadius:100,
    justifyContent:"space-between",
    elevation:10,
    marginTop:"1%",
    

  },
  chooseServiceButton:{
    backgroundColor:"white",
    borderRadius:100,
    height:"100%",
    width:"22%",
    elevation:10,
    alignItems:"center",
    marginLeft:"2%",
    justifyContent:"center",
    borderWidth:2,
    borderColor:"#rgb(57,180,76)"
    },
    chooseServiceImage:{
      height:"70%",
      width:"70%",

    },
    chooseServiceView2:{
      height:"25%",
      width:"50%",
      flexDirection:"row",
      backgroundColor:"#rgba(255, 255, 255, 0.4)",
      borderRadius:100,
      justifyContent:"space-between",
      elevation:10
      
  
    },
    chooseServiceButton2:{
      backgroundColor:"white",
      borderRadius:100,
      height:"100%",
      width:"30%",
      elevation:10,
      alignItems:"center",
      marginLeft:"2%",
      justifyContent:"center",
      borderWidth:2,
      borderColor:"#rgb(57,180,76)"
      },
      chooseServiceImage2:{
        height:"65%",
        width:"65%",
  
      },

})
