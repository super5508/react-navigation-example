import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigations } from "../navigations";

export const MockScreen: React.FC = () => {
  const { goToScreenA, goToScreenB, goToScreenC, goToScreenD } =
    useNavigations();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToScreenA}>
        <Text>Screen A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToScreenB}>
        <Text>Screen B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToScreenC}>
        <Text>Screen C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToScreenD}>
        <Text>Screen D</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: "#3598dc",
    color: "white",
    fontSize: 16,
    lineHeight: 20,
  },
});
