import { createStackNavigator } from "@react-navigation/stack";
import Help from "../features/Help/Help";
import React from "react";

// type checking.
export type CommunityBoardStackParamList = {
  CommunityBoardScreen: undefined;
};

// create CommunityBoard tab.
const CommunityBoardStack =
  createStackNavigator<CommunityBoardStackParamList>();

// add CommunityBoard screens here
const CommunityBoardTab: React.FC = () => (
  <CommunityBoardStack.Navigator
    initialRouteName="CommunityBoardScreen"
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleAllowFontScaling: true,
      animationTypeForReplace: "pop",
      cardStyle: { backgroundColor: "white" },
    }}
  >
    <CommunityBoardStack.Screen name="CommunityBoardScreen" component={Help} />
  </CommunityBoardStack.Navigator>
);

// export as default.
export default CommunityBoardTab;
