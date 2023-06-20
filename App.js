import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import wallpaper from './assets/images/wallpaper.webp';

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={20} color="#ffffff" />
        <Text style={styles.date}>Tuesday, 20 June</Text>
        <Text style={styles.time}>22:00</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    backgroundColor: 'red'
  },
  date: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 500,
    color: "#c3fffe"
  },
  time: {
    fontSize: 82,
    fontWeight: 700,
    color: "#c3fffe"
  }
});
