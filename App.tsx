// App.tsx
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CareersScreen from "./src/screens/CareersScreen";
import BlogScreen from "./src/screens/BlogScreen";
import BlogDetailScreen from "./src/screens/BlogDetailScreen";

// ✅ Updated RootStackParamList
export type RootStackParamList = {
  Careers: undefined;
  Blog: undefined;
  BlogDetail: { postId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Careers" // Change to "Blog" if you want Blog first
        screenOptions={{
          headerStyle: { backgroundColor: "#0066cc" },
          headerTintColor: "#fff",
        }}
      >
        {/* Careers Screen */}
        <Stack.Screen
          name="Careers"
          component={CareersScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 120, height: 40, resizeMode: "contain" }}
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
                <Image
                  source={require("./assets/menu.png")}
                  style={{ width: 28, height: 28, marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        {/* Blog Screen */}
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 120, height: 40, resizeMode: "contain" }}
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Careers")}>
                <Image
                  source={require("./assets/menu.png")}
                  style={{ width: 28, height: 28, marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        {/* Blog Detail Screen */}
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetailScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 120, height: 40, resizeMode: "contain" }}
              />
            ),
            headerRight: () => null, // No menu on detail page (optional)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
