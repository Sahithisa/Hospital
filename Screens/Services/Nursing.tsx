//New code
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const nursingCare = ["12 hours", "24 hours"];
const types = [
  "Basic nursing",
  "Care for elderly",
  "Critical care",
  "Care taker",
  "General care attendant",
];
const onCallService = [
  "Injections",
  "IV infusion",
  "Vaccination",
  "Wound care",
];
const specializedCare = [
  "Administration of injections via infusion pump",
  "Bed sore care",
  "Cardiac Transplantation care",
  "Care of bedridden patient.",
  "Foleys catheterization and care",
  "Handling emergencies at home",
  "Liver Transplantation care",
  "Lung Transplantation care",
  "Oxygen administration",
  "Palliative care",
  "Ryles tube feedings, PEG tube feedings",
  "Tracheostomy care",
  "Ventilator care",
];

const cityText =
  "Hyderabad | Secunderabad | Cyberabad | Bengaluru | Delhi | Ananthapuramu | Tirupati | Nellore | Visakhapatnam | Vijayawada | Kurnool";

const Nursing: React.FC = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.mainTitle}>Nursing</Text>
    <Text style={styles.subtitle}>
      Aryam Health Care started its operations on World Physiotherapy Day, 8th Sep 2020
    </Text>
    <View style={styles.locationBox}>
      <Text style={styles.locationText}>{cityText}</Text>
    </View>

    <Text style={styles.sectionOrange}>Nursing Care</Text>
    {nursingCare.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

    <Text style={styles.sectionOrange}>Type</Text>
    {types.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

    <Text style={styles.sectionOrange}>On call Service</Text>
    {onCallService.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

    <Text style={styles.sectionOrange}>Specialized Care</Text>
    {specializedCare.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.checkSymbol}>✔</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B71C1C",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  locationBox: {
    backgroundColor: "#FFC107",
    borderRadius: 9,
    padding: 12,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    lineHeight: 22,
  },
  sectionOrange: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F57C00",
    marginTop: 18,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 13,
    marginBottom: 7,
  },
  symbol: {
    fontSize: 16,
    color: "#F57C00",
    marginRight: 8,
  },
  checkSymbol: {
    fontSize: 16,
    color: "#F57C00",
    marginRight: 8,
  },
  bulletText: {
    fontSize: 16,
    color: "#222",
  },
});

export default Nursing;




//Previous code
// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// const Nursing: React.FC = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Title */}
//       <Text style={styles.mainTitle}>Nursing</Text>
//       <Text style={styles.subtitle}>
//         Aryam Health Care started its operations on World Physiotherapy Day, 8th Sep 2020
//       </Text>

//       {/* Locations (Yellow background like website) */}
//       <View style={styles.locationBox}>
//         <Text style={styles.locationText}>
//           Hyderabad | Secunderabad |{"\n"} Cyberabad | Bengaluru | Delhi |{"\n"} Ananthapuramu | Tirupati | Nellore |
//           Visakhapatnam | Vijayawada | Kurnool
//         </Text>
//       </View>

//       {/* About Section */}
//       <Text style={styles.sectionRed}>Nursing</Text>
//       <Text style={styles.paragraph}>
//         Aryam Health Care nurses are highly trained, excellent in clinical approaches and show empathy in taking care of patients at home 
//         to fulfill their medical needs and basic needs of patients at home. Expertise in critical care, Palliative care, Oncology care, 
//         Supportive care, basic care, Geriatric care, assistance, to meet Hygienic needs, Nutritional needs, elimination needs, medication, 
//         activity, exercises, diversional therapy and safety needs. Aryam home Care Nursing services are delivered by well trained nurses 
//         from Medical Universities and also specially trained from Aryam clinical excellence team to fulfill demands of patients at home.
//       </Text>

//       {/* Nursing Care */}
//       <Text style={styles.sectionOrange}>Nursing Care</Text>
//       <Text style={styles.bullet}>◆ 12 hours</Text>
//       <Text style={styles.bullet}>◆ 24 hours</Text>

//       {/* Type */}
//       <Text style={styles.sectionOrange}>Type</Text>
//       <Text style={styles.bullet}>◆ Basic nursing</Text>
//       <Text style={styles.bullet}>◆ Care for elderly</Text>
//       <Text style={styles.bullet}>◆ Critical care</Text>
//       <Text style={styles.bullet}>◆ Care taker</Text>
//       <Text style={styles.bullet}>◆ General care attendant</Text>

//       {/* On Call Service */}
//       <Text style={styles.sectionOrange}>On call Service</Text>
//       <Text style={styles.bullet}>◆ Injections</Text>
//       <Text style={styles.bullet}>◆ IV infusion</Text>
//       <Text style={styles.bullet}>◆ Vaccination</Text>
//       <Text style={styles.bullet}>◆ Wound care</Text>

//       {/* Specialized Care */}
//       <Text style={styles.sectionOrange}>Specialized Care</Text>
//       <Text style={styles.check}>✔ Administration of injections via infusion pump</Text>
//       <Text style={styles.check}>✔ Bed sore care</Text>
//       <Text style={styles.check}>✔ Cardiac Transplantation care</Text>
//       <Text style={styles.check}>✔ Care of bedridden patient</Text>
//       <Text style={styles.check}>✔ Foleys catheterization and care</Text>
//       <Text style={styles.check}>✔ Handling emergencies at home</Text>
//       <Text style={styles.check}>✔ Liver Transplantation care</Text>
//       <Text style={styles.check}>✔ Lung Transplantation care</Text>
//       <Text style={styles.check}>✔ Oxygen administration</Text>
//       <Text style={styles.check}>✔ Palliative care</Text>
//       <Text style={styles.check}>✔ Ryles tube feedings, PEG tube feedings</Text>
//       <Text style={styles.check}>✔ Tracheostomy care</Text>
//       <Text style={styles.check}>✔ Ventilator care</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: "#fff" },

//   mainTitle: { fontSize: 26, fontWeight: "bold", color: "red", textAlign: "center", marginBottom: 8 },
//   subtitle: { fontSize: 14, color: "#333", textAlign: "center", marginBottom: 16 },

//   locationBox: {
//     backgroundColor: "#FFC107",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//   },
//   locationText: { fontSize: 15, fontWeight: "600", textAlign: "center", color: "#000" },

//   sectionRed: { fontSize: 18, fontWeight: "bold", color: "red", marginVertical: 10 },
//   sectionOrange: { fontSize: 18, fontWeight: "bold", color: "orange", marginTop: 18, marginBottom: 8 },

//   paragraph: { fontSize: 15, color: "#333", lineHeight: 22, marginBottom: 12 },

//   bullet: { fontSize: 15, color: "#ff5722", marginLeft: 10, marginBottom: 6 },
//   check: { fontSize: 15, color: "#ff5722", marginLeft: 10, marginBottom: 6 },
// });

// export default Nursing;


