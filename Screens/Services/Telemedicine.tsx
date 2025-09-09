//Final Code

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const cityList =
  "Hyderabad | Secunderabad |\n Cyberabad | Bengaluru | Delhi |\nAnanthapuramu | Tirupati | Nellore |\nVisakhapatnam | Vijayawada | Kurnool";

const specialists = [
  "General Medicine",
  "Gynaecology",
  "Psychiatry",
  "Virtual Physiotherapy",
  "Dietician",
  "Speech Therapist",
  "Neurology",
];

const Telemedicine: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Red header */}
      <Text style={styles.topHeader}>Telemedicine</Text>

      {/* Blue subtitle */}
      <Text style={styles.subtitle}>Digital Consultations &amp; Tele Rehab</Text>

      {/* Yellow city list */}
      <View style={styles.cityBox}>
        <Text style={styles.cityText}>{cityList}</Text>
      </View>

      {/* Red button and line */}
      <View style={styles.redButtonBox}>
        <Text style={styles.redButtonText}>Telemedicine</Text>
      </View>
      <View style={styles.horizontalLine} />

      {/* Heading + Paragraph */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionBigHeader}>Telemedicine</Text>
        <Text style={styles.paragraph}>
          Aryam delivers quality care with compassion. We bring world class medical care into our patients’ homes and aim to make primary health care not only more accessible, but also more affordable and accountable to our patients’ needs.
        </Text>
      </View>

      {/* Dropdown Section */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          activeOpacity={0.7}
          onPress={() => setShowDropdown((prev) => !prev)}
        >
          <Text style={styles.sectionOrange}>Aryam Virtual Specialists</Text>
          <Text style={styles.arrow}>{showDropdown ? "▾" : "▸"}</Text>
        </TouchableOpacity>

        {showDropdown &&
          specialists.map((item) => (
            <View key={item} style={styles.row}>
              <Image
                source={require("../../Assets/Icons/Tick.png")}
                style={styles.tickIcon}
              />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, paddingTop: 10 },

  topHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#B71C1C",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 17,
    color: "#002878",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 13,
    marginTop: 1,
  },

  cityBox: {
    backgroundColor: "#FFC107",
    borderRadius: 12,
    marginTop: 3,
    marginBottom: 18,
    paddingVertical: 13,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  cityText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
  },

  redButtonBox: {
    backgroundColor: "#B71C1C",
    borderRadius: 7,
    alignSelf: "flex-start",
    marginTop: 7,
    marginBottom: 1,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  redButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  horizontalLine: {
    height: 3,
    backgroundColor: "#ddd",
    marginBottom: 13,
    borderRadius: 2,
  },

  sectionBox: { marginBottom: 10 },
  sectionBigHeader: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#222",
    marginBottom: 9,
  },
  paragraph: {
    fontSize: 16,
    color: "#222",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },

  dropdownContainer: { marginBottom: 10, marginLeft: 2, marginTop: 5 },
  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    paddingVertical: 8,
  },
  sectionOrange: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F57C00",
    marginBottom: 4,
  },
  arrow: {
    color: "#999",
    fontSize: 21,
    marginLeft: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 1,
    marginBottom: 7,
  },
  tickIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: "#F57C00",
    resizeMode: "contain",
  },
  bulletText: {
    fontSize: 16,
    color: "#222",
  },
});

export default Telemedicine;



//Previous code
// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

// const cityList =
//   "Hyderabad | Secunderabad |\n Cyberabad | Bengaluru | Delhi |\nAnanthapuramu | Tirupati | Nellore |\nVisakhapatnam | Vijayawada | Kurnool";

// const specialists = [
//   "General Medicine",
//   "Gynaecology",
//   "Psychiatry",
//   "Virtual Physiotherapy",
//   "Dietician",
//   "Speech Therapist",
//   "Neurology",
// ];

// const Telemedicine: React.FC = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <ScrollView style={styles.container}>
//       {/* Red header */}
//       <Text style={styles.topHeader}>Telemedicine</Text>
//       {/* Blue subtitle */}
//       <Text style={styles.subtitle}>Digital Consultations &amp; Tele Rehab</Text>
//       {/* Yellow city list */}
//       <View style={styles.cityBox}>
//         <Text style={styles.cityText}>{cityList}</Text>
//       </View>
//       {/* Red button and line */}
//       <View style={styles.redButtonBox}>
//         <Text style={styles.redButtonText}>Telemedicine</Text>
//       </View>
//       <View style={styles.horizontalLine} />
//       {/* Heading + Paragraph */}
//       <View style={styles.sectionBox}>
//         <Text style={styles.sectionBigHeader}>Telemedicine</Text>
//         <Text style={styles.paragraph}>
//           Aryam delivers quality care with compassion. We bring world class medical care into our patients’ homes and aim to make primary health care not only more accessible, but also more affordable and accountable to our patients’ needs.
//         </Text>
//       </View>
//       {/* Dropdown Section */}
//       <View style={styles.dropdownContainer}>
//         <TouchableOpacity
//           style={styles.dropdownHeader}
//           activeOpacity={0.7}
//           onPress={() => setShowDropdown((prev) => !prev)}
//         >
//           <Text style={styles.sectionOrange}>Aryam Virtual Specialists</Text>
//           <Text style={styles.arrow}>{showDropdown ? "▾" : "▸"}</Text>
//         </TouchableOpacity>
//         {showDropdown &&
//           specialists.map((item) => (
//             <View key={item} style={styles.row}>
//               <Text style={styles.symbol}>✓</Text>
//               <Text style={styles.bulletText}>{item}</Text>
//             </View>
//           ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, paddingTop: 10 },
//   topHeader: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#B71C1C",
//     textAlign: "center",
//     marginTop: 10,
//     marginBottom: 4,
//   },
//   subtitle: {
//     fontSize: 17,
//     color: "#002878",
//     textAlign: "center",
//     fontWeight: "600",
//     marginBottom: 13,
//     marginTop: 1,
//   },
//   cityBox: {
//     backgroundColor: "#FFC107",
//     borderRadius: 12,
//     marginTop: 3,
//     marginBottom: 18,
//     paddingVertical: 13,
//     paddingHorizontal: 5,
//     alignItems: "center",
//   },
//   cityText: {
//     textAlign: "center",
//     color: "#333",
//     fontWeight: "600",
//     fontSize: 16,
//     lineHeight: 22,
//   },
//   redButtonBox: {
//     backgroundColor: "#B71C1C",
//     borderRadius: 7,
//     alignSelf: "flex-start",
//     marginTop: 7,
//     marginBottom: 1,
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//   },
//   redButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//     letterSpacing: 0.5,
//   },
//   horizontalLine: {
//     height: 3,
//     backgroundColor: "#ddd",
//     marginBottom: 13,
//     borderRadius: 2,
//   },
//   sectionBox: { marginBottom: 10 },
//   sectionBigHeader: {
//     fontWeight: "bold",
//     fontSize: 22,
//     color: "#222",
//     marginBottom: 9,
//   },
//   paragraph: {
//     fontSize: 16,
//     color: "#222",
//     lineHeight: 22,
//     marginBottom: 12,
//     textAlign: "justify",
//   },
//   dropdownContainer: { marginBottom: 10, marginLeft: 2, marginTop: 5 },
//   dropdownHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingRight: 16,
//     paddingVertical: 8,
//   },
//   sectionOrange: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#F57C00",
//     marginBottom: 4,
//   },
//   arrow: {
//     color: "#999",
//     fontSize: 21,
//     marginLeft: 8,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 13,
//     marginBottom: 7,
//   },
//   symbol: {
//     fontSize: 16,
//     color: "#F57C00",
//     fontWeight: "bold",
//     marginRight: 8,
//   },
//   bulletText: {
//     fontSize: 16,
//     color: "#222",
//   },
// });

// export default Telemedicine;
