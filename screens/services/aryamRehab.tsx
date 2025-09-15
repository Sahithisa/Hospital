import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
} from "react-native";

// Enable smooth animation on Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AryamRehab: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [highlightsOpen, setHighlightsOpen] = useState<boolean>(false);
  const [rehabCareOpen, setRehabCareOpen] = useState<boolean>(false);
  const [medProgramsOpen, setMedProgramsOpen] = useState<boolean>(false);

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    state: boolean
  ) => {
    LayoutAnimation.easeInEaseOut();
    setter(!state);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Heading */}
      <Text style={styles.pageHeading}>Aryam Rehab</Text>

      {/* Yellow Line */}
      <View style={styles.yellowLine} />

      {/* Red Box under Yellow Line */}
      <View style={styles.topBox}>
        <Text style={styles.topBoxText}>Aryam Rehab</Text>
      </View>

      {/* Grey Line under Red Box */}
      <View style={styles.greyLine} />

      {/* Heading with Icon */}
      <View style={styles.headingRow}>
        <Image
          source={require("../../assets/icons/aryamrehab-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.heading}>Aryam Rehab</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Early recovery from illness through wellness{"\n"}
        We design care plans derived from professional practitioners
      </Text>

      {/* Main Points */}
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>✔ Right to Approach</Text>
        <Text style={styles.bullet}>✔ Right Diagnosis</Text>
        <Text style={styles.bullet}>
          ✔ Right Care Plan – Motivation, Counseling, Diet nutrition,
          Specialised Physiotherapy, Skilled and Empathetic Nursing
        </Text>
        <Text style={styles.bullet}>
          ✔ Right monitoring with best outcome measures
        </Text>
      </View>

      {/* Dropdown: Our Services Include */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => toggle(setServicesOpen, servicesOpen)}
      >
        <Text style={styles.dropdownTitle}>Our services include</Text>
        <Text style={styles.arrow}>{servicesOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {servicesOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.listItem}>✔ Skilled Nursing</Text>
          <Text style={styles.listItem}>✔ Occupational Therapy</Text>
          <Text style={styles.listItem}>✔ Psychological Wellness</Text>
          <Text style={styles.listItem}>✔ Food & Nutrition</Text>
          <Text style={styles.listItem}>✔ Physiotherapy</Text>
          <Text style={styles.listItem}>✔ Speech Therapy</Text>
          <Text style={styles.listItem}>✔ Respiratory Therapy</Text>
        </View>
      )}

      {/* Dropdown: Highlights */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => toggle(setHighlightsOpen, highlightsOpen)}
      >
        <Text style={styles.dropdownTitle}>Highlights</Text>
        <Text style={styles.arrow}>{highlightsOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {highlightsOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.listItem}>✔ Individual Rooms</Text>
          <Text style={styles.listItem}>✔ Spacious Exercise Rehab</Text>
          <Text style={styles.listItem}>✔ Consultations</Text>
        </View>
      )}

      {/* Dropdown: Our Care in Rehab */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => toggle(setRehabCareOpen, rehabCareOpen)}
      >
        <Text style={styles.dropdownTitle}>Our care in Rehab includes</Text>
        <Text style={styles.arrow}>{rehabCareOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {rehabCareOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.listItem}>✔ Stroke</Text>
          <Text style={styles.listItem}>✔ Spinal Cord Injuries</Text>
          <Text style={styles.listItem}>✔ Elderly Care</Text>
          <Text style={styles.listItem}>✔ Tracheostomy Care</Text>
          <Text style={styles.listItem}>✔ Postoperative care (TKR, THR)</Text>
        </View>
      )}

      {/* Dropdown: Medically Supervised Programs */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => toggle(setMedProgramsOpen, medProgramsOpen)}
      >
        <Text style={styles.dropdownTitle}>
          Our medically supervised programs
        </Text>
        <Text style={styles.arrow}>{medProgramsOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {medProgramsOpen && (
        <View style={styles.dropdownContent}>
          <Text style={styles.listItem}>✔ Heart Rehab</Text>
          <Text style={styles.listItem}>✔ Lung Rehab</Text>
          <Text style={styles.listItem}>✔ Onco Rehab</Text>
          <Text style={styles.listItem}>✔ Neuro Rehab</Text>
          <Text style={styles.listItem}>✔ Elderly Rehab</Text>
          <Text style={styles.listItem}>✔ Women’s Health and Fitness</Text>
          <Text style={styles.listItem}>✔ Exercise Program for Pregnancy</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },

  pageHeading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#B71c1c", 
    textAlign: "center",
    marginBottom: 8,
  },

  yellowLine: {
    height: 4,
    backgroundColor: "#FFB400",
    width: "100%",
    borderRadius: 2,
    marginBottom: 8,
  },

  topBox: {
    backgroundColor: "#B71c1c",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 6,
  },

  topBoxText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  greyLine: {
    height: 2,
    backgroundColor: "#ccc",
    width: "100%",
    marginBottom: 16,
  },

  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
    resizeMode: "contain",
  },

  heading: { fontSize: 22, fontWeight: "bold", color: "#222" },

  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
    marginBottom: 16,
  },

  bulletContainer: { marginBottom: 18 },

  bullet: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
    lineHeight: 22,
  },

  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 8,
  },

  dropdownTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e65100",
  },

  arrow: { fontSize: 18, color: "#555" },

  dropdownContent: {
    paddingVertical: 10,
    marginBottom: 10,
    paddingLeft: 5,
  },

  listItem: {
    fontSize: 15,
    color: "#444",
    marginBottom: 6,
    lineHeight: 22,
  },
});

export default AryamRehab;
