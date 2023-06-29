import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";

const NotificationsList = ({footerVisibility, ...props}) => {
  const listVisibility = useSharedValue(1);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
 
      if (y < 10) {
        footerVisibility.value = withTiming(1, { duration: 300 });
      } else {
        footerVisibility.value = withTiming(0, { duration: 300 });
      }
    },
    onEndDrag: (event) => {
      if (event.contentOffset.y < -10 && listVisibility.value === 1) {
        listVisibility.value = withTiming(0, { duration: 500 })
      } else if (event.contentOffset.y > 0 && listVisibility.value === 0) {
        listVisibility.value = withSpring(1)
      }
    }
  });

  return (
    <Animated.FlatList
      data={notifications}
      renderItem={({ item, index }) => (
        <NotificationItem
          data={item}
          index={index}
          listVisibility={listVisibility}
        />
      )}
      onScroll={scrollHandler}
      scrollEventThrottle={1000 / 60}
      {...props}
    />
  );
};

export default NotificationsList;
