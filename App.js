import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  SlideInDown,
  useSharedValue,
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated';
import NotificationsList from './src/components/NotificationsList';
import DateTime from './src/components/DateTime'
import SwipeUptoOpen from './src/components/SwipeUpToOpen';
import wallpaper from './assets/images/wallpaper.webp';

export default App = () => {
  const footerVisibility = useSharedValue(1);
  const animatedFooterStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(footerVisibility.value, [0, 1], [-75, 0]),
    opacity: footerVisibility.value
  }));

  return (
    <ImageBackground source={wallpaper} style={styles.container}>     
      <NotificationsList
        footerVisibility={footerVisibility}
        ListHeaderComponent={() => (
          <DateTime />
        )}
      />
      <Animated.View entering={SlideInDown} style={[styles.footer, animatedFooterStyle]}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="#ffffff" />
        </View>
        <SwipeUptoOpen />
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="#ffffff" />
        </View>
      </Animated.View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}


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
