import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NewBooking() {
  const router = useRouter();

  const [client, setClient] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        {/* Pasek nagłówka */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>New booking</Text>
        </View>

        {/* Formularz */}
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.label}>Client</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter client name"
            value={client}
            onChangeText={setClient}
          />

          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={date}
            onChangeText={setDate}
          />

          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            value={time}
            onChangeText={setTime}
          />

          <Text style={styles.label}>Massage Type</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Classic, Friskvård, Deep tissue"
            value={type}
            onChangeText={setType}
          />

          <Text style={styles.label}>Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 60 min"
            value={duration}
            onChangeText={setDuration}
          />

          {/* Przycisk */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              alert('Booking saved!');
              router.back();
            }}
          >
            <Text style={styles.saveButtonText}>Save booking</Text>
          </TouchableOpacity>
        </ScrollView>
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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: '#2F80ED',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
