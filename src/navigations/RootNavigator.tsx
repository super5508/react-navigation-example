import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RootStackNavigatorParamList,
  StackANavigator,
  StackBNavigator,
} from ".";

const RootStack = createStackNavigator<RootStackNavigatorParamList>();
export const navigationRef = createNavigationContainerRef();

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="StackA"
          component={StackANavigator}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="StackB"
          component={StackBNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
