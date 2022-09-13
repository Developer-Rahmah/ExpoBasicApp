import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./Routes";
import Help from "../features/Help/Help";

// type checking.
export type ChatStackParamList = {
  ChatScreen: undefined;
  ChatRoom: undefined;
  MembersChatList: undefined;
};

// create Chat tab.
const ChatStack = createStackNavigator<ChatStackParamList>();

// add Chat screens here
const ChatTab: React.FC = () => (
  <ChatStack.Navigator
    initialRouteName={Routes.ChatScreen}
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerBackTitleVisible: false,
      headerTitleAllowFontScaling: true,
      animationTypeForReplace: "pop",
      cardStyle: { backgroundColor: "white" },
    }}
  >
    <ChatStack.Screen name={Routes.ChatScreen} component={Help} />
  </ChatStack.Navigator>
);

// export as default.
export default ChatTab;
