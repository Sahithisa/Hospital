import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Diagnostics from "./screens/Services/Diagnostics";
import AryamRehab from "./screens/Services/AryamRehab";
import MedicalDevices from "./screens/Services/Medicaldevices";

export type RootStackParamList = {
  diagnostics: undefined;
  aryamRehab: undefined;
  medicalDevices: undefined; // ✅ Add Medical Devices route
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="diagnostics">
        {/* <Stack.Screen name="Physiotherapy" component={Physiotherapy} /> */}
        
        <Stack.Screen name="diagnostics" component={Diagnostics} />
        <Stack.Screen name="aryamRehab" component={AryamRehab} />
        <Stack.Screen 
  name="medicalDevices"   // ✅ match RootStackParamList
  component={MedicalDevices} 
  options={{ title: "Medical Devices" }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
