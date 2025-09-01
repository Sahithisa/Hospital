import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // install if not installed
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App"; // adjust path if needed

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleNavigate = (service: keyof RootStackParamList) => {
    if (service) {
      navigation.navigate(service);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Service</Text>
      <Picker
        selectedValue={selectedService}
        onValueChange={(itemValue) => {
          setSelectedService(itemValue);
          handleNavigate(itemValue as keyof RootStackParamList);
        }}
        style={styles.picker}
      >
        <Picker.Item label="-- Choose a Service --" value="" />
        <Picker.Item label="Aryam Rehabilitation" value="AryamRehab" />
        <Picker.Item label="Diagnostics" value="Diagnostics" />
        <Picker.Item label="Medical Devices" value="MedicalDevices" />
        <Picker.Item label="Nursing" value="Nursing" />
        <Picker.Item label="Physio Equipment" value="PhysioEquipment" />
        <Picker.Item label="Physiotherapy" value="Physiotherapy" />
        <Picker.Item label="Telemedicine" value="Telemedicine" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  picker: { height: 50, width: "100%" },
});

export default HomeScreen;
