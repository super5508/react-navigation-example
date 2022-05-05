import { StackScreenProps } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorParamList {}
  }
}
export type RootStackNavigatorParamList = {
  StackA: NavigatorScreenParams<StackAParamList> | undefined;
  StackB: NavigatorScreenParams<StackBParamList> | undefined;
};

export type StackAParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

export type StackBParamList = {
  ScreenC: undefined;
  ScreenD: undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackNavigatorParamList
> = StackScreenProps<RootStackNavigatorParamList, Screen>;

export type StackARouteType = keyof StackAParamList;
export type StackBRouteType = keyof StackBParamList;

export type StackAScreenProps<Screen extends keyof StackAParamList> =
  StackScreenProps<StackAParamList, Screen>;
export type StackBScreenProps<Screen extends keyof StackBParamList> =
  StackScreenProps<StackBParamList, Screen>;
