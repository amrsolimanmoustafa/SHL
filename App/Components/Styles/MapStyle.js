import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    position:"absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    position:"absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchTouchable:{
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:10,
    width:"80%",
    height:"6%",
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:"2%",
    justifyContent:"center",
  },
  searchTouchableText:{
    marginRight:"0%",
    marginTop:"2%",
    fontSize:20,
    color:"grey"
  },
  searchTouchableIcon:{
    fontSize:34,
    marginTop:"2%",
    color:"grey",
    backgroundColor:"white",
    borderRadius:100
  },
  
})
