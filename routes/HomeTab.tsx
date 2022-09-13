import React from "react";

import HomeScreen from "../features/Home/Home";
import { HomeStackParamList } from "navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator<HomeStackParamList>();

/**
 * Home navigation stack
 */
export const HomeTab: React.FC = () => (
  <HomeStack.Navigator
    initialRouteName="HomeScreen"
    detachInactiveScreens={false}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          opacity: progress,
        },
      }),
    }}
  >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);
