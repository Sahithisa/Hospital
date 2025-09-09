import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Diagnostics from "./screens/services/Diagnostics";
import AryamRehab from "./screens/services/AryamRehab";
import MedicalDevices from "./screens/services/MedicalDevices"; // ✅ Import new Medical Devices screen

export type RootStackParamList = {
  Diagnostics: undefined;
  AryamRehab: undefined;
  MedicalDevices: undefined; // ✅ Add Medical Devices route
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Diagnostics">
        {/* <Stack.Screen name="Physiotherapy" component={Physiotherapy} /> */}
        
        <Stack.Screen name="Diagnostics" component={Diagnostics} />
        <Stack.Screen name="AryamRehab" component={AryamRehab} />
        <Stack.Screen name="MedicalDevices"component={MedicalDevices} // ✅ Added Medical Devices screen
          options={{ title: "Medical Devices" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
