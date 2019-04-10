import React from "react"
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from './screens/Home'
import Saved from './screens/Saved'
import Booking from './screens/Booking'
import Inbox from './screens/Inbox'
import Account from './screens/Account'
import Flights from './component/iconScreen/Flights'
import Hotels from './component/iconScreen/Hotels'
import BillsTopup from './component/iconScreen/BillsTopup'


const HomeScreen = () => <Home />
const SavedScreen = () => <Saved />
const MyBookingScreen = () => <Booking />
const MyInboxScreen = () => <Inbox />
const MyAccountScreen = () => <Account />
const IconFlightsScreen = () => <Flights />


const TabNav = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Saved: SavedScreen,
    MyBooking: MyBookingScreen,
    MyInbox: MyInboxScreen,
    MyAccount: MyAccountScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : ""}`
        } else if (routeName === "Saved") {
          iconName = `ios-paper${focused ? "" : ""}`
        } else if (routeName === "MyBooking") {
          iconName = `ios-book${focused ? "" : ""}`
        } else if (routeName === "MyInbox") {
          iconName = `ios-mail-open${focused ? "" : ""}`
        } else if (routeName === "MyAccount") {
          iconName = `ios-person${focused ? "" : ""}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#00a8ff",
      inactiveTintColor: "gray"
    }
  }
)

const StackNav = createStackNavigator({
  Root: {
    screen: TabNav,
    navigationOptions: {
      // header: (props) => <Text>myhuder3</Text>,
      header: null,
    },
  },
  IconFlightsScreen: {
    screen: IconFlightsScreen,
    navigationOptions: {
      headerTintColor: '#fff',
      title: 'Flights',
      headerStyle: {
        backgroundColor: '#00a8ff',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
  Hotels: {
    screen: Hotels,
  },
  BillsTopup: {
    screen: BillsTopup,
    navigationOptions: {
      headerTintColor: '#fff',
      title: 'Bills & Top-up',
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }

})
const AppContainer = createAppContainer(StackNav);
export default AppContainer