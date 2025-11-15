import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Górny pasek z nazwą */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MassageTime</Text>
      </View>

      {/* Data dzisiejsza */}
      <Text style={styles.dateText}>Today – Friday, 8 November</Text>

      {/* Lista dzisiejszych wizyt */}
      <View style={styles.appointments}>
        <Text style={styles.appointment}>10:00  Anna Larsson – Classic 60 min</Text>
        <Text style={styles.appointment}>12:30  Johan Berg – Friskvård 45 min</Text>
        <Text style={[styles.appointment, styles.cancelled]}>
          15:00  Elin Larsson – Avbokad
        </Text>
      </View>

      {/* Przycisk na dole */}
      <View style={styles.footer}>
        <CustomButton
          title="New Booking"
          onPress={() => router.push('/NewBooking')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#E3EEFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D8E8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginTop: 6,
  },
  appointments: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  appointment: {
    fontSize: 15,
    color: '#000',
    marginBottom: 6,
  },
  cancelled: {
    color: '#E53935',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 90,
  },
});
