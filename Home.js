import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        style="dark"
      ></StatusBar>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 50,
            left: 30,
          }}
        >
          <FontAwesome5 name="book" size={24} color="black" />
          <Text style={{ fontSize: 20, paddingHorizontal: "2%" }}>
            BookBuddies
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
