//EXPO
//Expo SplashScreen
//https://docs.expo.dev/versions/latest/sdk/splash-screen
//accessed at:18/11/2024
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const Screensplash: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../_images/splash.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

export default Screensplash;
