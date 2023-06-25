import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay
} from "react-native-reanimated";

const SwipeUptoOpen = () => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(-15, { duration: 300 }),
            withDelay(1000, withTiming(0, { duration: 2000 })),
            withTiming(-15),
          ),
          -1)
      }
    ],
    opacity: withRepeat(withSequence(
      withDelay(1000, withTiming(0)),
      withDelay(2000, withTiming(1))
    ), -1)
  }));

  return (
    <Animated.Text
      style={[styles.text, animatedStyles]}
    >
      Swipe up to open
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontWeight: 600,
    letterSpacing: 0.5,
    alignSelf: 'flex-end',
    marginBottom: 10
  }
});

export default SwipeUptoOpen;
