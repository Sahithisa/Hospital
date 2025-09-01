import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type PhysiotherapyProp = StackNavigationProp<RootStackParamList, 'Physiotherapy'>;

const dropdowns = [
  {
    title: 'Pain Management',
    items: ['Neck', 'Shoulder', 'Elbow', 'Mid and Lower Back', 'Hip', 'Knee', 'Ankle', 'Heel'],
  },
  {
    title: 'General Physiotherapy',
    items: ['For 50 years above'],
  },
  {
    title: 'Life Supporting Physiotherapy',
    items: ['Cardiac Rehabilitation', 'Lung Rehabilitation'],
  },
  {
    title: 'Specialized Physiotherapy',
    items: [
      'Ortho Rehab',
      'Neuro Rehab',
      'Pediatric Physiotherapy',
      'Pre Natal and Post Natal Exercise Programme',
      'Geriatric Rehabilitation',
      'Physiotherapy in Cancer, Diabetes Hypertension',
    ],
  },
  {
    title: 'Sports Physiotherapy',
    items: ['Ligament Injuries', 'ACL/PCI'],
  },
];

const staticCategories = [
  'Speech Therapy',
  'Nutritional Counseling',
  'Occupational Therapy',
  'Psychologist',
];

const Physiotherapy: React.FC = () => {
  const navigation = useNavigation<PhysiotherapyProp>();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (idx: number) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Physiotherapy</Text>
      <View style={styles.yellowLine} />
      <TouchableOpacity style={styles.redButton}>
        <Text style={styles.redButtonText}>Physiotherapy</Text>
      </TouchableOpacity>
      <View style={styles.sectionBox}>
        <Text style={styles.sectionHeader}>Physiotherapy</Text>
        <Text style={styles.sectionText}>
          Physiotherapy is a vast branch of modern medicine related to all branches of medicine. Physiotherapy plays major role in treating pain, recovering from stroke, restoring joint range of motion, enhances quality of life post heart conditions, improves lung function capacity, motivates in reliving from sports injuries, guides pregnant women for happy and healthy delivery.
        </Text>
        <Text style={styles.sectionText}>
          Physiotherapy for elderly people in dealing with their experienced life and to promote activities of daily living through special rehab with customization.
        </Text>
      </View>

      {dropdowns.map((cat, idx) => (
        <View key={cat.title} style={styles.categoryBox}>
          <TouchableOpacity
            style={styles.dropdownHeader}
            activeOpacity={0.7}
            onPress={() => handleDropdown(idx)}
          >
            <Text style={styles.categoryTitle}>{cat.title}</Text>
            <Text style={styles.arrow}>
              {openDropdown === idx ? '▾' : '▸'}
            </Text>
          </TouchableOpacity>
          {openDropdown === idx &&
            cat.items.map(item => (
              <View key={item} style={styles.listRow}>
                <Text style={styles.orangeTick}>✓</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
        </View>
      ))}

      {staticCategories.map(c => (
        <View key={c} style={styles.staticCatBox}>
          <Text style={styles.staticCatText}>{c}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.nursingButton}
        onPress={() => navigation.navigate('Nursing')}
      >
        <Text style={styles.nursingButtonText}>Go to Nursing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nursingButton}
        onPress={() => navigation.navigate('PhysioEquipment')}
      >
        <Text style={styles.physioEquipmentButtonText}>physioEquipment</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B71C1C',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  yellowLine: {
    backgroundColor: '#FFC107',
    height: 7,
    marginHorizontal: 28,
    borderRadius: 5,
    marginBottom: 16,
  },
  redButton: {
    backgroundColor: '#B71C1C',
    alignSelf: 'flex-start',
    marginLeft: 18,
    paddingHorizontal: 19,
    paddingVertical: 11,
    borderRadius: 6,
    marginBottom: 9,
  },
  redButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionBox: { marginHorizontal: 18, marginBottom: 13 },
  sectionHeader: { fontWeight: 'bold', fontSize: 23, marginBottom: 12, color: '#222' },
  sectionText: { fontSize: 16, color: '#333', marginBottom: 7 },
  categoryBox: { marginLeft: 16, marginBottom: 6, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#eee' },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 22,
    paddingVertical: 8,
  },
  categoryTitle: {
    color: '#F57C00', // orange matching web style
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  arrow: {
    color: '#999',
    fontSize: 19,
    marginLeft: 8,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 20,
  },
  listText: {
    fontSize: 16,
    color: '#222'
  },
  orangeTick: {
    fontSize: 17,
    marginRight: 7,
    color: '#F57C00',
    fontWeight: 'bold',
  },
  staticCatBox: { marginLeft: 16, marginBottom: 14 },
  staticCatText: { color: '#F57C00', fontWeight: 'bold', fontSize: 17 },
  nursingButton: {
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 24,
    marginVertical: 28,
  },
  nursingButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
  },

    physioEquipmentButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 17,
  },



});

export default Physiotherapy;
