import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const xrayItems = [
  "Chest X-Ray",
  "Shoulder Joint",
  "Elbow",
  "Wrist",
  "Spine",
  "Hip",
  "Knee",
  "Ankle",
];

const Diagnostics: React.FC<any> = ({ navigation }) => {
  const [openXray, setOpenXray] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Diagnostics</Text>

      {/* Intro */}
      <Text style={styles.subHeader}>
        Aryam Health Care started it’s operations on World Physiotherapy Day,
        8ᵗʰ Sep 2020.
      </Text>

      {/* Cities */}
      <View style={styles.cityBox}>
        <Text style={styles.cityText}>
          Hyderabad | Secunderabad {"\n"}
          Cyberabad | Bengaluru | Delhi {"\n"}
          Ananthapuramu | Tirupati | Nellore {"\n"}
          Visakhapatnam | Vijayawada | Kurnool
        </Text>
      </View>

      {/* 🔴 Red Box with Diagnostics + Grey Line */}
      <View style={styles.redBox}>
        <Text style={styles.redBoxText}>Diagnostics</Text>
      </View>
      <View style={styles.greyLine} />

      {/* 🔹 About Diagnostics with Icon */}
      <View style={styles.pageContent}>
        <View style={styles.iconTitleRow}>
          <Image
            source={require("../../assets/icons/Diagnostics.png")} // 👈 add your diagnostics icon here
            style={styles.smallIcon}
          />
          <Text style={styles.sectionTitle}>Diagnostics</Text>
        </View>
        <Text style={styles.sectionDesc}>
          Aryam delivers quality care with compassion. We bring world class
          medical care into our patients’ homes and aim to make primary health
          care not only more accessible, but also more affordable and accountable
          to our patients’ needs.
        </Text>
      </View>

      {/* Sample Collection */}
      <View style={styles.section}>
        <Text style={styles.sectionText}>✔ Sample Collection is done for all Tests.</Text>
      </View>

      {/* X-Ray Dropdown */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          activeOpacity={0.7}
          onPress={() => setOpenXray(!openXray)}
        >
          <Text style={styles.sectionTitle}>X-Ray at Home</Text>
          <Text style={styles.arrow}>{openXray ? "▾" : "▸"}</Text>
        </TouchableOpacity>

        {openXray && (
          <View style={styles.listBox}>
            {xrayItems.map((item, index) => (
              <View key={index} style={styles.listRow}>
                <Text style={styles.bullet}>✔ </Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Navigation Button for Aryam Rehab */}
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => navigation.navigate("AryamRehab")}
      >
        <Text style={styles.redButtonText}>Go to Aryam Rehab</Text>
      </TouchableOpacity>

      {/* Navigation Button for Medical Devices */}
      <TouchableOpacity
        style={styles.redButton}
        onPress={() => navigation.navigate("MedicalDevices")}
      >
        <Text style={styles.redButtonText}>Go to Medical Devices</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 18 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B71c1c",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 15,
    textAlign: "center",
    color: "#444",
    marginBottom: 16,
  },
  cityBox: {
    backgroundColor: "#FFC107",
    padding: 12,
    borderRadius: 6,
    marginBottom: 18,
  },
  cityText: {
    fontSize: 15,
    color: "#222",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
  },
  redBox: {
    backgroundColor: "#B71c1c",
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    borderRadius: 4,
    marginBottom: 4,
  },
  redBoxText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  greyLine: {
    height: 3,
    backgroundColor: "#ccc",
    marginBottom: 13,
    width: "100%",
  },

  // 🔹 Icon + Title Row
  pageContent: { marginBottom: 20 },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  smallIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  sectionDesc: {
    fontSize: 15,
    color: "#555",
    lineHeight: 20,
  },

  section: { marginBottom: 20 },
  sectionText: {
    fontSize: 15,
    color: "#555",
    lineHeight: 20,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  arrow: {
    fontSize: 20,
    color: "#555",
    marginRight: 6,
  },
  listBox: {
    marginTop: 8,
    paddingLeft: 8,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  bullet: {
    fontSize: 18,
    color: "#F57C00",
    marginRight: 8,
  },
  listText: {
    fontSize: 15,
    color: "#444",
  },
  redButton: {
    backgroundColor: "#B71c1c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 15,
  },
  redButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Diagnostics;
