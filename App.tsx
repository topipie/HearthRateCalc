import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [age, setAge] = useState<string>("");
    const ageAsNumber = Number(age);

    let lowerhr = 0;
    let upperhr = 0;

  // Jos ikä on annettu ja se on kelvollinen numero, lasketaan tavoitesykealue. Jos ikää ei ole annettu tai se on teksiä, asetetaan tavoitesykealue nollaksi.
    if (age !== "" && !isNaN(ageAsNumber)) {
        lowerhr = (220 - ageAsNumber) * 0.65;
        upperhr = (220 - ageAsNumber) * 0.85;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>HEART RATE LIMITS CALCULATOR</Text>
      <TextInput
        placeholder="Enter your age:"
        keyboardType="number-pad"
        value = {age}
        onChangeText={setAge}

      />
      <Text style={styles.hr}>Lower Limit: {lowerhr.toFixed(2)} bpm</Text>
      <Text style={styles.hr}>Upper Limit: {upperhr.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 110,
    paddingLeft: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  hr: {
    fontSize: 16,
    marginTop: 10,
  },
});
