import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Water() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-bonzab.png')}
        style={styles.image}
      />
      <Text style={styles.AppName}>BonZab</Text>
      <Text style={styles.justifiedText}>L'OMS recommande de boire au moins 2 litres d'eau par jour. Et si tu prenais la
      BonZab de t'hydrater pour rester en bonne santé, ce serait super non ?</Text>
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
  },
  justifiedText: {
    textAlign: 'center',
  },
  AppName: {
    fontSize: 24, // Taille de la police pour le nom de l'application
    fontWeight: 'bold', // Mettre le texte en gras
    textAlign: 'center', // Centrer le texte
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  }
});
