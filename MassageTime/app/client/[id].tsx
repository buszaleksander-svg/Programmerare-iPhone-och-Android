import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CLIENTS = [
  {
    id: '1',
    name: 'Anna Larsson',
    phone: '070 987 65 43',
    email: 'anna.larsson@email.com',
    notes: 'Tension in shoulders. Prefers classic 60 min massage.',
  },
  {
    id: '2',
    name: 'Johan Berg',
    phone: '070 123 45 67',
    email: 'johan.berg@email.com',
    notes: 'Prefers Friskvård 45 min massage. Often books morning sessions.',
  },
];

export default function ClientDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const client = CLIENTS.find((c) => c.id === id);

  if (!client) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFound}>Client not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        {/* Pasek nagłówka */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>{client.name}</Text>
        </View>

        {/* Dane klienta */}
        <View style={styles.info}>
          <Text style={styles.infoText}>{client.phone}</Text>
          <Text style={styles.infoText}>{client.email}</Text>
        </View>

        {/* Notatki */}
        <View style={styles.notes}>
          <Text style={styles.notesTitle}>Massage notes:</Text>
          <Text style={styles.notesText}>{client.notes}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E3EEFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D8E8',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 10,
    padding: 5,
  },
  backText: {
    fontSize: 16,
    color: '#2F80ED',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  info: {
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 6,
  },
  notes: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  notFound: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
