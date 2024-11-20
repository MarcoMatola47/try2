//<!--The IIE,2024.MAST5112/d/p/w MODULE MANUAL/GUIDE. 2012-->
//Yursa Adams
//fitness tracker app
//navigation version
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, dishDetails } from "./types/task.Object";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { Screenadd } from "./screens/add";
import { Screenmenu } from "./screens/menu";
import { FilterScreen } from "./screens/filter";
import Screensplash from "./screens/splash";

function App() {
  //EXPO
  //Expo SplashScreen
  //https://docs.expo.dev/versions/latest/sdk/splash-screen
  //accessed at:18/11/2024
  const [isLoading, setIsLoading] = useState(true);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Screensplash />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screenmenu">
            <Stack.Screen
              name="Screenmenu"
              component={Screenmenu}
            ></Stack.Screen>
            <Stack.Screen name="Screenadd" component={Screenadd}></Stack.Screen>
            <Stack.Screen
              name="FilterScreen"
              component={FilterScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
export default App;

// // // // // // // // / // / / / / / / / / /
