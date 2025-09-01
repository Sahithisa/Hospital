//New code

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type PhysioEquipmentProp = StackNavigationProp<RootStackParamList, 'PhysioEquipment'>;

const cityList = [
  'Hyderabad', 'Secunderabad', 'Cyberabad','Bengaluru', 'Delhi',
  'Ananthapuramu', 'Tirupati', 'Nellore', 'Visakhapatnam', 'Vijayawada', 'Kurnool',
];

const advancedEquipments = ['Robotic Hands','Computerized Wheel Chair','WI HI Rehab Products','Bionic Leg'];
const electroTherapy = ['IFT','TENS','Heating Pad','Muscle Stimulator','Ultra Sound','Laser'];
const exerciseTherapy = ['Crepe Bandages','Cool Bandages','Cervical Pillows','CIMT Kits','Diabetic Footwear','Diabetic Socks','Dumbbells','Exercise Ball','Ergonomics','Knuckle Binder','Lumbar Pillows','Medical Tapes'];
const orthotics = ['BB Splint','Cock up Splint','Cervcal Collars','Frog Splint','Foot Drop Splint','Facial Splint','Immobilizers','Knee Braces','Kypho Scolotic Braces','Providence Collars','Splints','Soft/Hard Collars','Thomos Splint'];
const prosthetics = ['Above Knee','Below Knee','Lower Limb','Upper Limb','3D Printed Prosthetics'];
const walkSupportiveDevices = ['Auxiliary Crutches','Monopod','Tripod','Quadripod','Walkers','Rollators'];

const PhysioEquipment: React.FC = () => {
  const navigation = useNavigation<PhysioEquipmentProp>();

  // Dropdown state
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (section: string) => {
    setExpanded(prev => (prev === section ? null : section));
  };

  const renderCategory = (title: string, items: string[]) => (
    <View style={styles.listCategory}>
      <TouchableOpacity onPress={() => toggleExpand(title)}>
        <Text style={styles.categoryTitle}>
          {title} {expanded === title ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>
      {expanded === title &&
        items.map(item => (
          <View key={item} style={styles.itemRow}>
            <Text style={styles.tick}>✔</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.header}>Physio Equipment</Text>
      <Text style={styles.subtitle}>
        Aryam Health Care started it’s operations on World Physiotherapy Day, 8th Sep 2020
      </Text>

      {/* City List */}
      <View style={styles.cityBox}>
        <Text style={styles.cityText}>
          {cityList.join(' | ')}
        </Text>
      </View>

      {/* Red Button */}
      <TouchableOpacity style={styles.equipmentButton}>
        <Text style={styles.equipmentButtonText}>Physio Equipment</Text>
      </TouchableOpacity>

      {/* Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Physio Equipment</Text>
        <Text style={styles.sectionText}>
          Aryam delivers quality care with compassion. We bring world class medical care into our patients’ homes 
          and aim to make primary health care not only more accessible, but also more affordable and accountable 
          to our patients’ needs.
        </Text>

        {/* Dropdown Categories */}
        {renderCategory("Advanced Equipment", advancedEquipments)}
        {renderCategory("Electro Therapy (Portable and Digital)", electroTherapy)}
        {renderCategory("Exercise Therapy", exerciseTherapy)}
        {renderCategory("Orthotics", orthotics)}
        {renderCategory("Prosthetics", prosthetics)}
        {renderCategory("Walk Supportive Devices", walkSupportiveDevices)}
      </View>

      {/* Nursing Button */}
      {/* <TouchableOpacity
        style={styles.nursingButton}
        onPress={() => navigation.navigate('Nursing')}
      >
        <Text style={styles.nursingButtonText}>Go to Nursing</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Header
  header: { 
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B71C1C',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
    marginBottom: 18,
    paddingHorizontal: 15,
  },

  // Cities
  cityBox: {
    backgroundColor: '#FFC107',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginBottom: 18,
  },
  cityText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
  },

  // Red Button
  equipmentButton: {
    backgroundColor: '#B71C1C',
    alignSelf: 'flex-start',
    marginLeft: 16,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  equipmentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  // Section
  section: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#222'
  },
  sectionText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 14,
    lineHeight: 22,
  },

  // Categories
  listCategory: {
    marginTop: 12,
    marginBottom: 6,
  },
  categoryTitle: {
    color: '#F57C00',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 6,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginLeft: 12,
  },
  tick: {
    fontSize: 16,
    marginRight: 8,
    color: '#F57C00'
  },
  itemText: {
    fontSize: 15,
    color: '#222'
  },

  // Nursing Button
  nursingButton: {
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginVertical: 24,
  },
  nursingButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PhysioEquipment;


//City box

      // {/* City Box */}
      // <View style={styles.cityBox}>
      //   <Text style={styles.cityText}>
      //     Hyderabad | Secunderabad | Cyberabad | Bengaluru | Delhi |{'\n'}
      //     Ananthapuramu | Tirupati | Nellore | Visakhapatnam |{'\n'}
      //     Vijayawada | Kurnool
      //   </Text>
      // </View>






//previous code
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../App';

// type PhysioEquipmentProp = StackNavigationProp<RootStackParamList, 'PhysioEquipment'>;

// const cityList = [
//   'Hyderabad', 'Secunderabad', 'Cyberabad', 'Bengaluru', 'Delhi',
//   'Ananthapuramu', 'Tirupati', 'Nellore', 'Visakhapatnam', 'Vijayawada', 'Kurnool',
// ];

// const advancedEquipments = [
//   'Robotic Hands',
//   'Computerized Wheel Chair',
//   'WI HI Rehab Products',
//   'Bionic Leg'
// ];

// const electroTherapy = [
//   'IFT', 'TENS', 'Heating Pad', 'Muscle Stimulator', 'Ultra Sound', 'Laser'
// ];

// const exerciseTherapy = [
//   'Crepe Bandages', 'Cool Bandages', 'Cervical Pillows', 'CIMT Kits',
//   'Diabetic Footwear', 'Diabetic Socks', 'Dumbbells', 'Exercise Ball',
//   'Ergonomics', 'Knuckle Binder', 'Lumbar Pillows', 'Medical Tapes'
// ];

// const orthotics = [
//   'BB Splint', 'Cock up Splint', 'Cervcal Collars', 'Frog Splint',
//   'Foot Drop Splint', 'Facial Splint', 'Immobilizers', 'Knee Braces',
//   'Kypho Scolotic Braces', 'Providence Collars', 'Splints',
//   'Soft/Hard Collars', 'Thomos Splint'
// ];

// const prosthetics = [
//   'Above Knee', 'Below Knee', 'Lower Limb', 'Upper Limb', '3D Printed Prosthetics'
// ];

// const walkSupportiveDevices = [
//   'Auxiliary Crutches', 'Monopod', 'Tripod', 'Quadripod', 'Walkers', 'Rollators'
// ];

// const PhysioEquipment: React.FC = () => {
//   const navigation = useNavigation<PhysioEquipmentProp>();
//   return (
//     <ScrollView style={styles.container}>
//       {/* Title */}
//       <Text style={styles.header}>Physio Equipment</Text>
//       <Text style={styles.subtitle}>
//         Aryam Health Care started it’s operations on World Physiotherapy Day, 8th Sep 2020
//       </Text>

//       {/* City List */}
//       <View style={styles.cityBox}>
//         <Text style={styles.cityText}>
//           {cityList.join(' | ')}
//         </Text>
//       </View>

//       {/* Red Button */}
//       <TouchableOpacity style={styles.equipmentButton}>
//         <Text style={styles.equipmentButtonText}>Physio Equipment</Text>
//       </TouchableOpacity>

//       {/* Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionHeader}>Physio Equipment</Text>
//         <Text style={styles.sectionText}>
//           Aryam delivers quality care with compassion. We bring world class medical care into our patients’ homes 
//           and aim to make primary health care not only more accessible, but also more affordable and accountable 
//           to our patients’ needs.
//         </Text>

//         {/* Advanced Equipment */}
//         <Text style={styles.categoryTitle}>Advanced Equipment</Text>
//         {advancedEquipments.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}

//         {/* Electro Therapy */}
//         <Text style={styles.categoryTitle}>Electro Therapy (Portable and Digital)</Text>
//         {electroTherapy.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}

//         {/* Exercise Therapy */}
//         <Text style={styles.categoryTitle}>Exercise Therapy</Text>
//         {exerciseTherapy.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}

//         {/* Orthotics */}
//         <Text style={styles.categoryTitle}>Orthotics</Text>
//         {orthotics.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}

//         {/* Prosthetics */}
//         <Text style={styles.categoryTitle}>Prosthetics</Text>
//         {prosthetics.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}

//         {/* Walk Supportive Devices */}
//         <Text style={styles.categoryTitle}>Walk Supportive Devices</Text>
//         {walkSupportiveDevices.map(item => (
//           <View key={item} style={styles.itemRow}>
//             <Text style={styles.tick}>✔</Text>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Nursing Button */}
//       <TouchableOpacity
//         style={styles.nursingButton}
//         onPress={() => navigation.navigate('Nursing')}
//       >
//         <Text style={styles.nursingButtonText}>Go to Nursing</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },

//   // Header
//   header: { 
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#B71C1C',
//     textAlign: 'center',
//     marginTop: 18,
//     marginBottom: 8,
//   },
//   subtitle: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#333',
//     marginBottom: 18,
//     paddingHorizontal: 15,
//   },

//   // Cities
//   cityBox: {
//     backgroundColor: '#FFC107',
//     borderRadius: 10,
//     paddingVertical: 13,
//     paddingHorizontal: 10,
//     marginHorizontal: 16,
//     marginBottom: 18,
//   },
//   cityText: {
//     textAlign: 'center',
//     color: '#000',
//     fontWeight: '600',
//     fontSize: 15,
//     lineHeight: 20,
//   },

//   // Red Button
//   equipmentButton: {
//     backgroundColor: '#B71C1C',
//     alignSelf: 'flex-start',
//     marginLeft: 16,
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 16,
//   },
//   equipmentButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16
//   },

//   // Section
//   section: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: '#ddd'
//   },
//   sectionHeader: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginBottom: 10,
//     color: '#222'
//   },
//   sectionText: {
//     fontSize: 15,
//     color: '#444',
//     marginBottom: 14,
//     lineHeight: 22,
//   },

//   // Categories
//   categoryTitle: {
//     color: '#F57C00',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     marginLeft: 10,
//   },
//   tick: {
//     fontSize: 16,
//     marginRight: 8,
//     color: '#F57C00'
//   },
//   itemText: {
//     fontSize: 15,
//     color: '#222'
//   },

//   // Nursing Button
//   nursingButton: {
//     alignSelf: 'center',
//     backgroundColor: '#FFC107',
//     paddingVertical: 12,
//     paddingHorizontal: 28,
//     borderRadius: 25,
//     marginVertical: 24,
//   },
//   nursingButtonText: {
//     color: '#222',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default PhysioEquipment;

