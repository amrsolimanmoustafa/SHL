import { StackNavigator,DrawerNavigator } from 'react-navigation'
import AdsScreen from '../Containers/AdsScreen'
import MakeServeyScreen from '../Containers/MakeServeyScreen'
import JoinUsScreen from '../Containers/JoinUsScreen'
import PriceListScreen from '../Containers/PriceListScreen'
import AboutUsScreen from '../Containers/AboutUsScreen'
import PolicyScreen from '../Containers/PolicyScreen'
import ContactManagmentScreen from '../Containers/ContactManagmentScreen'
import HomeScreen from '../Containers/HomeScreen'
import VerifyPhoneScreen from '../Containers/VerifyPhoneScreen'
import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'
import LaunchScreen from '../Containers/LaunchScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  VerifyPhoneScreen: { screen: VerifyPhoneScreen },
  LoginScreen: { screen: LoginScreen },
  SplashScreen: { screen: SplashScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})



const DrawerLeft = DrawerNavigator(
  {
    "التواصل مع الادارة": {
      screen: HomeScreen,
    },
    "الشروط و الاحكام": {
      screen: PolicyScreen,
    },
    "السلام عليكم " : { 
      screen: ContactManagmentScreen
    },
    "عن التطبيق": { 
      screen: JoinUsScreen 
    },
    "اسعار الخدمات": { 
      screen: PriceListScreen
     },
    "انضم كمزود خدمة": { 
      screen: AboutUsScreen 
    },
    "شاركنا رأيك": { 
      screen:   MakeServeyScreen
    },
    "العروض": { 
      screen:  AdsScreen
    },

  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerCloser',
    drawerToggleRoute: 'DrawerToggler',
  }
);

const DrawerRight = DrawerNavigator({
  HomeScreen: {
    screen: DrawerLeft,
  },
  MakeServeyScreen: {
    screen: MakeServeyScreen
  },
 JoinUsScreen: { 
   screen: JoinUsScreen 
 },
 PriceListScreen: { 
   screen: PriceListScreen
  },
 AboutUsScreen: { 
   screen: AboutUsScreen 
 },
 PolicyScreen: { 
   screen: PolicyScreen 
 },
 ContactManagmentScreen: { 
   screen: ContactManagmentScreen 
 },

}, {
  drawerOpenRoute: 'DrawerRightOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerPosition:'right',
});


export default DrawerRight
