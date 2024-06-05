import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function Water() {
  
  const [waterCount, setWaterCount] = useState(0);

  const waterHandler = () => {
    setWaterCount(waterCount + 0.25)
  }

  const resetWater = () => {
    setWaterCount(0)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-bonzab.png')}
        style={styles.image}
      />
      <Text style={styles.AppName}>BonZab</Text>
      <Text style={styles.justifiedText}>L'OMS recommande de boire 35ml d'eau par kg de poids corporel par jour en temps normal. Et si tu prenais la
      BonZab de t'hydrater pour rester en bonne santé, ce serait super non ?</Text>
      <Text style={styles.justifiedText}>Définis toi même tes propres objectifs de boisson (en eau évidemment).</Text>
      <Text style={styles.justifiedText}>Chez BonZab, on te recommande évidemment de boire au moins 2L d'eau chaque jour </Text>
      <Text style={styles.justifiedText}>Aujourd'hui, vous avez bu {waterCount}L d'eau. Plus que {2-waterCount}L pour atteindre l'objectif journalier.</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title='Boire un verre'
          onPress={waterHandler}
        />
        <Button
          title='Réinitialiser'
          onPress={resetWater}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  justifiedText: {
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  AppName: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  }
});
