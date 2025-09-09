

//Final code
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const nursingCare = ["12 hours", "24 hours"];
const types = [
  "Basic nursing",
  "Care for elderly",
  "Critical care",
  "Care taker",
  "General care attender",
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
const cityList =
  "Hyderabad | Secunderabad |\n Cyberabad | Bengaluru | Delhi |\nAnanthapuramu | Tirupati | Nellore |\nVisakhapatnam | Vijayawada | Kurnool";

const Nursing: React.FC = () => (
  <ScrollView style={styles.container}>
    {/* Logo */}
    {/* <View style={styles.logoBox}>
      <Image
        source={require("../../Assets/Icons/Nursing.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View> */}

    {/* Main red header */}
    <Text style={styles.topHeader}>Nursing</Text>

    {/* Subtitle with superscript */}
    <Text style={styles.subtitle}>
      Aryam Health Care started it’s operations on World Physiotherapy Day,
      <Text style={styles.superscript}> 8</Text>
      <Text style={styles.superscriptSmall}>th</Text>
      <Text style={styles.superscript}> Sep 2020</Text>
    </Text>

    {/* Yellow city list box */}
    <View style={styles.cityBox}>
      <Text style={styles.cityText}>{cityList}</Text>
    </View>

    {/* Red button and horizontal line */}
    <View style={styles.redButtonBox}>
      <Text style={styles.redButtonText}>Nursing</Text>
    </View>
    <View style={styles.horizontalLine} />

    {/* Icon + Heading + Paragraph */}
    <View style={styles.sectionBox}>
      <View style={styles.sectionHeaderRow}>
        <Image
          source={require("../../Assets/Icons/Nursing.png")} // your nurse icon
          style={styles.sectionIcon}
          resizeMode="contain"
        />
        <Text style={styles.sectionBigHeader}>Nursing</Text>
      </View>
      <Text style={styles.paragraph}>
        Aryam Health Care nurses are highly trained, excellent in clinical
        approaches and shows empathy in taking care of patients at home to
        fulfill their medical needs and basic needs of patient at home. Expertise
        in critical care, Palliative care, Oncology care. Supportive care, basic
        care, Geriatric care, assistance, to meet Hygienic needs, Nutritional
        needs, elimination needs, medication, activity, exercises, diversional
        therapy and safety needs. Aryam home Care Nursing services are delivered
        by well trained nurses from Medical Universities and also specially
        trained from Aryam clinical excellence team to fulfill demands of
        patients at home.
      </Text>
    </View>

    {/* Nursing Care List */}
    <Text style={styles.sectionOrange}>Nursing Care</Text>
    {nursingCare.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

    {/* Type List */}
    <Text style={styles.sectionOrange}>Type</Text>
    {types.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

    {/* On Call Service List */}
    <Text style={styles.sectionOrange}>On call Service</Text>
    {onCallService.map((item) => (
      <View key={item} style={styles.row}>
        <Text style={styles.symbol}>◆</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}

      {/* Specialized Care */}
      <Text style={styles.sectionOrange}>Specialized Care</Text>
      {specializedCare.map((item) => (
        <View key={item} style={styles.rowCare}>
          <Image
            source={require("../../Assets/Icons/Tick.png")}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logoBox: { alignItems: "center", marginBottom: 4, marginTop: 6 },
  logo: { width: 150, height: 50 },
  topHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#B71C1C",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#222",
    textAlign: "center",
    marginBottom: 14,
    fontWeight: "500",
    lineHeight: 22,
  },
  superscript: { fontSize: 15, color: "#222" },
  superscriptSmall: {
    fontSize: 10,
    color: "#222",
    textAlignVertical: "top",
  },
  cityBox: {
    backgroundColor: "#FFC107",
    borderRadius: 12,
    marginTop: 6,
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  cityText: {
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
  },
  redButtonBox: {
    backgroundColor: "#B71C1C",
    borderRadius: 7,
    alignSelf: "flex-start",
    marginTop: 5,
    marginBottom: 0,
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
    height: 2,
    backgroundColor: "#ddd",
    marginBottom: 13,
    borderRadius: 2,
  },
  sectionBox: { marginBottom: 10 },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop:15,
  },
  sectionIcon: {
    width: 32,
    height: 32,
    tintColor: "#B71C1C", // red icon
    marginRight: 6,
  },
  sectionBigHeader: { fontWeight: "bold", fontSize: 22, color: "#222",left:9 },
  paragraph: {
    fontSize: 16,
    color: "#222",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
    top:15,
  },
  sectionOrange: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5820fff",
    marginTop: 1,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 1,
    marginBottom: 7,
  },
    rowCare: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 1,
    marginBottom: 19,
  },
  symbol: {
    fontSize: 16,
    color: "#F57C00",
    fontWeight: "bold",
    marginRight: 8,
  },
  checkSymbol: {
    fontSize: 16,
    color: "#F57C00",
    fontWeight: "bold",
    marginRight: 8,
    
  },
  bulletText: { fontSize: 16, color: "#222" },
    tickIcon: {
   width: 20,
   height: 20,
   marginRight: 8,
  },
});

export default Nursing;


// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// const nursingCare = ["12 hours", "24 hours"];
// const types = [
//   "Basic nursing",
//   "Care for elderly",
//   "Critical care",
//   "Care taker",
//   "General care attender",
// ];
// const onCallService = [
//   "Injections",
//   "IV infusion",
//   "Vaccination",
//   "Wound care",
// ];
// const specializedCare = [
//   "Administration of injections via infusion pump",
//   "Bed sore care",
//   "Cardiac Transplantation care",
//   "Care of bedridden patient.",
//   "Foleys catheterization and care",
//   "Handling emergencies at home",
//   "Liver Transplantation care",
//   "Lung Transplantation care",
//   "Oxygen administration",
//   "Palliative care",
//   "Ryles tube feedings, PEG tube feedings",
//   "Tracheostomy care",
//   "Ventilator care",
// ];

// const cityList =
//   "Hyderabad | Secunderabad |\n Cyberabad | Bengaluru | Delhi |\nAnanthapuramu | Tirupati | Nellore |\nVisakhapatnam | Vijayawada | Kurnool";

// const Nursing: React.FC = () => (
//   <ScrollView style={styles.container}>
//     {/* Main red header */}
//     <Text style={styles.topHeader}>Nursing</Text>
//     {/* Subtitle */}
//     <Text style={styles.subtitle}>
//       Aryam Health Care started it’s operations on World Physiotherapy Day, 
//       <Text style={styles.superscript}> 8</Text>
//       <Text style={styles.superscriptSmall}>th</Text>
//       <Text style={styles.superscript}> Sep 2020</Text>
//     </Text>
//     {/* Yellow city list box */}
//     <View style={styles.cityBox}>
//       <Text style={styles.cityText}>{cityList}</Text>
//     </View>
//     {/* Red button and horizontal line */}
//     <View style={styles.redButtonBox}>
//       <Text style={styles.redButtonText}>Nursing</Text>
//     </View>
//     <View style={styles.horizontalLine} />
//     {/* Heading + Paragraph */}
//     <View style={styles.sectionBox}>
//       <Text style={styles.sectionBigHeader}>Nursing</Text>
//       <Text style={styles.paragraph}>
//         Aryam Health Care nurses are highly trained, excellent in clinical approaches and shows empathy in taking care of patients at home to fulfill their medical needs and basic needs of patient at home. Expertise in critical care, Palliative care, Oncology care. Supportive care, basic care, Geriatric care, assistance,to meet Hygienic needs, Nutritional needs, elimination needs, medication, activity, exercises, diversional therapy and safety needsAryam home Care Nursing services are delivered by well trained nurses from Medical Universities and also specially trained from Aryam clinical excellence team to fulfill demands of patients at home.
//       </Text>
//     </View>
//     {/* Section List */}
//     <Text style={styles.sectionOrange}>Nursing Care</Text>
//     {nursingCare.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}
//     <Text style={styles.sectionOrange}>Type</Text>
//     {types.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}
//     <Text style={styles.sectionOrange}>On call Service</Text>
//     {onCallService.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}
//     <Text style={styles.sectionOrange}>Specialized Care</Text>
//     {specializedCare.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.checkSymbol}>✔</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}
//   </ScrollView>
// );

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
//     fontSize: 15,
//     color: "#222",
//     textAlign: "center",
//     marginBottom: 14,
//     fontWeight: "500",
//   },
//   superscript: {
//     fontSize: 15,
//     color: "#222",
//   },
//   superscriptSmall: {
//     fontSize: 10,
//     color: "#222",
//     textAlignVertical: "top",
//   },
//   cityBox: {
//     backgroundColor: "#FFC107",
//     borderRadius: 12,
//     marginTop: 6,
//     marginBottom: 20,
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     alignItems: "center",
//   },
//   cityText: {
//     textAlign: "center",
//     color: "#333",
//     fontWeight: "600",
//     fontSize: 17,
//     lineHeight: 22,
//   },
//   redButtonBox: {
//     backgroundColor: "#B71C1C",
//     borderRadius: 7,
//     alignSelf: "flex-start",
//     marginTop: 5,
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
//   sectionBigHeader: { fontWeight: "bold", fontSize: 22, color: "#222", marginBottom: 9 },
//   paragraph: {
//     fontSize: 16,
//     color: "#222",
//     lineHeight: 22,
//     marginBottom: 12,
//     textAlign: "justify",
//   },
//   sectionOrange: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#F57C00",
//     marginTop: 18,
//     marginBottom: 8,
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
//   checkSymbol: {
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

// export default Nursing;



//New code
// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// const nursingCare = ["12 hours", "24 hours"];
// const types = [
//   "Basic nursing",
//   "Care for elderly",
//   "Critical care",
//   "Care taker",
//   "General care attendant",
// ];
// const onCallService = [
//   "Injections",
//   "IV infusion",
//   "Vaccination",
//   "Wound care",
// ];
// const specializedCare = [
//   "Administration of injections via infusion pump",
//   "Bed sore care",
//   "Cardiac Transplantation care",
//   "Care of bedridden patient.",
//   "Foleys catheterization and care",
//   "Handling emergencies at home",
//   "Liver Transplantation care",
//   "Lung Transplantation care",
//   "Oxygen administration",
//   "Palliative care",
//   "Ryles tube feedings, PEG tube feedings",
//   "Tracheostomy care",
//   "Ventilator care",
// ];

// const cityText =
//   "Hyderabad | Secunderabad | Cyberabad | Bengaluru | Delhi | Ananthapuramu | Tirupati | Nellore | Visakhapatnam | Vijayawada | Kurnool";

// const Nursing: React.FC = () => (
//   <ScrollView style={styles.container}>
//     <Text style={styles.mainTitle}>Nursing</Text>
//     <Text style={styles.subtitle}>
//       Aryam Health Care started its operations on World Physiotherapy Day, 8th Sep 2020
//     </Text>
//     <View style={styles.locationBox}>
//       <Text style={styles.locationText}>{cityText}</Text>
//     </View>

//     <Text style={styles.sectionOrange}>Nursing Care</Text>
//     {nursingCare.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}

//     <Text style={styles.sectionOrange}>Type</Text>
//     {types.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}

//     <Text style={styles.sectionOrange}>On call Service</Text>
//     {onCallService.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.symbol}>◆</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}

//     <Text style={styles.sectionOrange}>Specialized Care</Text>
//     {specializedCare.map((item) => (
//       <View key={item} style={styles.row}>
//         <Text style={styles.checkSymbol}>✔</Text>
//         <Text style={styles.bulletText}>{item}</Text>
//       </View>
//     ))}
//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: "#fff" },
//   mainTitle: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#B71C1C",
//     textAlign: "center",
//     marginBottom: 8,
//     marginTop: 6,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 16,
//   },
//   locationBox: {
//     backgroundColor: "#FFC107",
//     borderRadius: 9,
//     padding: 12,
//     marginBottom: 16,
//   },
//   locationText: {
//     fontSize: 15,
//     fontWeight: "600",
//     textAlign: "center",
//     color: "#000",
//     lineHeight: 22,
//   },
//   sectionOrange: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#F57C00",
//     marginTop: 18,
//     marginBottom: 8,
//   },
//   paragraph: {
//     fontSize: 15,
//     color: "#333",
//     lineHeight: 22,
//     marginBottom: 12,
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
//     marginRight: 8,
//   },
//   checkSymbol: {
//     fontSize: 16,
//     color: "#F57C00",
//     marginRight: 8,
//   },
//   bulletText: {
//     fontSize: 16,
//     color: "#222",
//   },
// });

// export default Nursing;




