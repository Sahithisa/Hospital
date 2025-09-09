// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import AryamRehab from "./Screens/Services/AryamRehab";
// import Diagnostics from "./Screens/Services/Diagnostics";
// import MedicalDevices from "./Screens/Services/MedicalDevices";
// import Nursing from "./Screens/Services/Nursing";
// import PhysioEquipment from "./Screens/Services/PhysioEquipment";
// import Physiotherapy from "./Screens/Services/Physiotherapy";
// import Telemedicine from "./Screens/Services/Telemedicine";

// export type RootStackParamList = {
//   AryamRehab: undefined;
//   Diagnostics: undefined;
//   MedicalDevices: undefined;
//   Nursing: undefined;
//   PhysioEquipment: undefined;
//   Physiotherapy: undefined;
//   Telemedicine: undefined;
// };

// const Stack = createStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AryamRehab">
//         <Stack.Screen
//           name="AryamRehab"
//           component={AryamRehab}
//           options={{ title: "Aryam Rehabilitation" }}
//         />
//         <Stack.Screen
//           name="Diagnostics"
//           component={Diagnostics}
//           options={{ title: "Diagnostics" }}
//         />
//         <Stack.Screen
//           name="MedicalDevices"
//           component={MedicalDevices}
//           options={{ title: "Medical Devices" }}
//         />
//         <Stack.Screen
//           name="Nursing"
//           component={Nursing}
//           options={{ title: "Nursing" }}
//         />
//         <Stack.Screen
//           name="PhysioEquipment"
//           component={PhysioEquipment}
//           options={{ title: "Physio Equipment" }}
//         />
//         <Stack.Screen
//           name="Physiotherapy"
//           component={Physiotherapy}
//           options={{ title: "Physiotherapy" }}
//         />
//         <Stack.Screen
//           name="Telemedicine"
//           component={Telemedicine}
//           options={{ title: "Telemedicine" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;





import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Nursing from "./Screens/Services/Nursing";
import PhysioEquipment from "./Screens/Services/PhysioEquipment";
import Physiotherapy from "./Screens/Services/Physiotherapy";
import Telemedicine from "./Screens/Services/Telemedicine";


export type RootStackParamList = {
  Nursing: undefined;
  PhysioEquipment: undefined;
  Physiotherapy: undefined;
  Telemedicine: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Physiotherapy">
        <Stack.Screen name="Nursing" component={Nursing} />
        <Stack.Screen name="PhysioEquipment" component={PhysioEquipment} />
        <Stack.Screen name="Physiotherapy" component={Physiotherapy} /> 
        <Stack.Screen name="Telemedicine" component={Telemedicine}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






//All services routs
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Home from "./Screens/Home"; // 👈 new home dropdown
// import AryamRehab from "./Screens/Services/AryamRehab";
// import Diagnostics from "./Screens/Services/Diagnostics";
// import MedicalDevices from "./Screens/Services/MedicalDevices";
// import Nursing from "./Screens/Services/Nursing";
// import PhysioEquipment from "./Screens/Services/PhysioEquipment";
// import Physiotherapy from "./Screens/Services/Physiotherapy";
// import Telemedicine from "./Screens/Services/Telemedicine";

// export type RootStackParamList = {
//   Home: undefined;
//   AryamRehab: undefined;
//   Diagnostics: undefined;
//   MedicalDevices: undefined;
//   Nursing: undefined;
//   PhysioEquipment: undefined;
//   Physiotherapy: undefined;
//   Telemedicine: undefined;
// };

// const Stack = createStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} options={{ title: "All Services" }} />
//         <Stack.Screen name="AryamRehab" component={AryamRehab} options={{ title: "Aryam Rehabilitation" }} />
//         <Stack.Screen name="Diagnostics" component={Diagnostics} options={{ title: "Diagnostics" }} />
//         <Stack.Screen name="MedicalDevices" component={MedicalDevices} options={{ title: "Medical Devices" }} />
//         <Stack.Screen name="Nursing" component={Nursing} options={{ title: "Nursing" }} />
//         <Stack.Screen name="PhysioEquipment" component={PhysioEquipment} options={{ title: "Physio Equipment" }} />
//         <Stack.Screen name="Physiotherapy" component={Physiotherapy} options={{ title: "Physiotherapy" }} />
//         <Stack.Screen name="Telemedicine" component={Telemedicine} options={{ title: "Telemedicine" }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
