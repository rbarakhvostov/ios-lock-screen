import { FlatList, useWindowDimensions } from "react-native";
import NotificationItem from "./NotificationItem";
import notifications from "../../assets/data/notifications";

const NotificationsList = (props) => {
  const { height } = useWindowDimensions();

  return (
    <FlatList
      data={notifications}
      renderItem={({ item, index }) => (
        <NotificationItem
          data={item}
          index={index}
        />
      )}
      {...props}
    />
  );
};

export default NotificationsList;
