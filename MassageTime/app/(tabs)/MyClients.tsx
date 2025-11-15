import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CLIENTS = [
  { id: '1', name: 'Anna Larsson', phone: '070 987 65 43' },
  { id: '2', name: 'Johan Berg', phone: '070 123 45 67' },
];

export default function MyClients() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Górny pasek */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My clients</Text>
      </View>

      {/* Pole wyszukiwania */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search clients..."
        placeholderTextColor="#888"
      />

      {/* Lista klientów */}
      <FlatList
        data={CLIENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clientRow}>
            <View>
              <Text style={styles.clientName}>{item.name}</Text>
              <Text style={styles.clientPhone}>{item.phone}</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => router.push(`/client/${item.id}`)}
            >
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#E3EEFF',
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D8E8',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  clientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
  },
  clientPhone: {
    fontSize: 14,
    color: '#555',
  },
  viewButton: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
