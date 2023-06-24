import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import NotificationsList from './src/components/NotificationsList';
import wallpaper from './assets/images/wallpaper.webp';

export default function App() {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs())
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <ImageBackground source={wallpaper} style={styles.container}>     
      <NotificationsList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Ionicons name="ios-lock-closed" size={20} color="#ffffff" />
            <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
            <Text style={styles.time}>{date.format("hh:mm")}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="#ffffff" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="#ffffff" />
        </View>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 270,
  },
  date: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 500,
    color: "#c3fffe"
  },
  time: {
    fontSize: 82,
    fontWeight: 700,
    color: "#c3fffe"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 75,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 'auto'
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: "#00000050"
  }
});
