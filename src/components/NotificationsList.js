import { useWindowDimensions } from "react-native";
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";
import Animated, { useAnimatedScrollHandler, withTiming } from "react-native-reanimated";

const NotificationsList = ({footerVisibility, ...props}) => {
  const { height } = useWindowDimensions();
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
 
      if (y < 10) {
        footerVisibility.value = withTiming(1, { duration: 300 });
      } else {
        footerVisibility.value = withTiming(0, { duration: 300 });
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
        />
      )}
      onScroll={scrollHandler}
      scrollEventThrottle={1000 / 60}
      {...props}
    />
  );
};

export default NotificationsList;
