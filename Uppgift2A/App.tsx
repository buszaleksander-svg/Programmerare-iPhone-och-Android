import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

// Simple list of Chuck Norris jokes in English
const jokes = [
  "Chuck Norris counted to infinity. Twice.",
  "When Chuck Norris enters a room, he doesn’t turn the lights on. He turns the dark off.",
  "Chuck Norris can hear sign language.",
  "Chuck Norris can divide by zero.",
  "When Chuck Norris does push-ups, he’s not lifting himself up – he’s pushing the Earth down.",
];

export default function App() {
  const [joke, setJoke] = useState(jokes[0]);

  const handleNewJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uppgift2A</Text>
      <Text style={styles.joke}>{joke}</Text>
      <Button title="New Chuck Norris joke" onPress={handleNewJoke} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  joke: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
