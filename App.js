import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { SlideInDown } from 'react-native-reanimated';
import NotificationsList from './src/components/NotificationsList';
import DateTime from './src/components/DateTime'
import wallpaper from './assets/images/wallpaper.webp';

export default App = () => (
  <ImageBackground source={wallpaper} style={styles.container}>     
    <NotificationsList
      ListHeaderComponent={() => (
        <DateTime />
      )}
    />
    <Animated.View entering={SlideInDown} style={styles.footer}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="flashlight" size={24} color="#ffffff" />
      </View>
      <View style={styles.icon}>
        <Ionicons name="ios-camera" size={24} color="#ffffff" />
      </View>
    </Animated.View>
    <StatusBar style="light" />
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
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
