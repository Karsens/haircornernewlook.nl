import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import PricesScreen from "../screens/PricesScreen";

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={"md-home"} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: "Over",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={"ios-information-circle-outline"} />
      )
    }
  },
  Prices: {
    screen: PricesScreen,
    navigationOptions: {
      tabBarLabel: "Prijzen",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={"ios-gift"} />
      )
    }
  }
});

tabNavigator.path = "";

export default tabNavigator;
