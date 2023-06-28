import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';

const DateTime = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs())
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.header}>
      <Ionicons name="ios-lock-closed" size={20} color="#ffffff" />
      <Text style={styles.date}>{date.format("dddd, DD MMMM")}</Text>
      <Text style={styles.time}>{date.format("hh:mm")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#c3fffe",
  }
});

export default DateTime;
