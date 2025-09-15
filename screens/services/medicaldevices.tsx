import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const MedicalDevicesScreen = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Lung Devices / Equipment",
      content: [
        "BiPap",
        "Oxygen Concentrator",
        "Nebulizers",
        "Pulse Oximeter",
        "Oxygen Mask",
        "Oxygen Nasal Cannula",
        "Humidifier",
        "Acapella",
        "Incentive Spirometer",
        "Air Purifier",
        "Oxygen Cylinder",
      ],
      showArrow: true,
    },
    { title: "Sleep Study", content: [], showArrow: false },
    { title: "Alpa Bed", content: [], showArrow: false },
    { title: "Air Bed", content: [], showArrow: false },
    { title: "Fowler Bed", content: [], showArrow: false },
    { title: "Wheel Chair", content: [], showArrow: false },
    {
      title: "ICU - Functional Bed",
      content: ["ICU Setup", "Functional Bed"],
      showArrow: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* 🔹 Top Header Section (Removed Icon) */}
      <View style={styles.topHeader}>
        <Text style={styles.heading}>Medical Devices</Text>

        <Text style={styles.subText}>
          Aryam Health Care started it’s operations on World Physiotherapy Day,
          8th Sep 2020
        </Text>

        <View style={styles.cityBar}>
          <Text style={styles.cityText}>
            Hyderabad | Secunderabad {"\n"}
            Cyberabad | Bengaluru | Delhi {"\n"}
            Ananthapuramu | Tirupati | Nellore {"\n"}
            Visakhapatnam | Vijayawada | Kurnool
          </Text>
        </View>
      </View>

      {/* 🔹 Red Box with underline */}
      <View style={styles.redBoxWrapper}>
        <View style={styles.redBox}>
          <Text style={styles.redBoxText}>Medical Devices</Text>
        </View>
        <View style={styles.redLine} />
      </View>

      {/* 🔹 Page Content */}
      <View style={styles.pageContent}>
        <View style={styles.iconTitleRow}>
          <Image
            source={require("../../assets/icons/medicaldevices.png")}
            style={styles.smallIcon}
          />
          <Text style={styles.sectionTitle}>Medical Devices</Text>
        </View>
        <Text style={styles.sectionDesc}>
          Aryam delivers quality care with compassion. We bring world class
          medical care into our patients’ homes and aim to make primary health
          care not only more accessible, but also more affordable and
          accountable to our patients’ needs.
        </Text>
      </View>

      {/* 🔹 Accordion Sections */}
      {sections.map((section, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection(section.title)}
          >
            <Text
              style={[
                styles.sectionText,
                openSection === section.title && { color: "orange" },
              ]}
            >
              {section.title}
            </Text>

            {section.showArrow && (
              <Text style={styles.arrow}>
                {openSection === section.title ? "▲" : "▼"}
              </Text>
            )}
          </TouchableOpacity>

          {openSection === section.title && section.content.length > 0 && (
            <View style={styles.sectionContent}>
              {section.content.map((item, i) => (
                <Text key={i} style={styles.itemText}>
                  ✔ {item}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topHeader: {
    alignItems: "center",
    padding: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  cityBar: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 8,
    width: "95%",
  },
  cityText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  redBoxWrapper: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  redBox: {
    backgroundColor: "brown",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignSelf: "flex-start",
  },
  redBoxText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  redLine: {
    height: 2,
    backgroundColor: "grey",
    width: "100%",
  },
  pageContent: {
    padding: 15,
  },
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
    fontWeight: "bold",
  },
  sectionDesc: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  arrow: {
    fontSize: 18,
    color: "gray",
  },
  sectionContent: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 3,
  },
});

export default MedicalDevicesScreen;
