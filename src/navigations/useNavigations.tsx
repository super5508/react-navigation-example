import { navigationRef } from "./RootNavigator";

export const useNavigations = () => {
  const goToScreenA = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("StackA", { screen: "ScreenA" });
    }
  };
  const goToScreenB = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("StackA", { screen: "ScreenB" });
    }
  };
  const goToScreenC = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("StackB", { screen: "ScreenC" });
    }
  };
  const goToScreenD = () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("StackB", { screen: "ScreenD" });
    }
  };
  return { goToScreenA, goToScreenB, goToScreenC, goToScreenD };
};
