import { createStackNavigator } from "@react-navigation/stack";
import { MockScreen } from "../screens";
import { StackBParamList } from "./types";

const Stack = createStackNavigator<StackBParamList>();

export const StackBNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenC" component={MockScreen} />
      <Stack.Screen name="ScreenD" component={MockScreen} />
    </Stack.Navigator>
  );
};
