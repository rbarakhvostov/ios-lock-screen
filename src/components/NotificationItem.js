import { View, Text, StyleSheet, Image } from "react-native";

export const NOTIFICATION_HEIGHT = 80;

const NotificationItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={data.icon} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {data.subtitle}
        </Text>
      </View>
      <Text style={styles.time}>{data.createdAt} ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: NOTIFICATION_HEIGHT - 10,
    backgroundColor: "#00000075",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 13,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "#d3d3d3",
    fontSize: 12,
    position: "absolute",
    right: 10,
    top: 10,
  },
  icon: {
    width: 40,
    aspectRatio: 1,
    marginRight: 10,
  },
  title: {
    color: "#ffffff",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  subtitle: {
    color: "#ffffff",
    lineHeight: 18,
    letterSpacing: 0.2,
  },
});

export default NotificationItem;
