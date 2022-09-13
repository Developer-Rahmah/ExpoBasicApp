import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import Home from "../assets/svgs/SVGHome";
import More from "../assets/svgs/SVGMore";
import BottomTab from "../components/BottomTabButton";
import { HomeTab } from "./HomeTab";
import MoreTab from "./MoreTab";
import Routes from "./Routes";
import { HomeStackParamList, MoreStackParamList } from "navigationTypes";

// type checking.
export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  MoreTab: NavigatorScreenParams<MoreStackParamList>;
};
// create bottom tab navigator.
const Tab = createBottomTabNavigator<BottomTabParamList>();

/**
 * A function component that shows a bottom tab navigator.
 */
export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTab {...props} />}
    >
      <Tab.Screen
        name={Routes.HomeTab}
        component={HomeTab}
        options={() => ({
          tabBarIcon: Home,
          tabBarLabel: "Home",
        })}
      />
      <Tab.Screen
        name={Routes.MoreTab}
        component={MoreTab}
        options={{
          tabBarIcon: More,
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
