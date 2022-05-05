import { createStackNavigator } from "@react-navigation/stack";
import { MockScreen } from "../screens";
import { StackAParamList } from "./types";

const Stack = createStackNavigator<StackAParamList>();

export const StackANavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={MockScreen} />
      <Stack.Screen name="ScreenB" component={MockScreen} />
    </Stack.Navigator>
  );
};
