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
import { BlurView } from "expo-blur";

export default function App() {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        style="auto"
      ></StatusBar>
      <ImageBackground
        source={require("./assets/book2.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <Image
            source={require("./assets/logo.png")}
            style={{
              height: 60,
              width: 60,
              marginTop: "50%",
              marginLeft: 30,
            }}
          />
          <Text style={{ marginTop: "50%", fontSize: 40 }}>BookBuddies</Text>
        </View>

        <Text
          style={{
            marginTop: "70%",
            fontSize: 15,
            padding: "10%",
            textAlign: "center",
          }}
        >
          Your ultimate ebook companion and social platform for book lovers.
        </Text>

        <View
          style={{
            backgroundColor: "#fdf5e6",
            paddingTop: 10,
            borderRadius: 20,
            margin: "5%",
            position: "absolute",
            bottom: 30,
            width: "90%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View
              style={{
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 110,
                  backgroundColor: "#1b1b1b",
                  borderRadius: 20,
                  marginTop: "5%",
                  marginLeft: "5%",
                  marginBottom: "10%",
                }}
              >
                <Text
                  style={{ color: "#fff", padding: 15, textAlign: "center" }}
                >
                  {" "}
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ textAlign: "center" }}>
              <TouchableOpacity
                style={{
                  width: 110,
                  backgroundColor: "#1b1b1b",
                  borderRadius: 20,
                  marginTop: "6%",
                  marginRight: "3%",
                  marginBottom: "10%",
                }}
              >
                <Text
                  style={{ color: "#fff", padding: 15, textAlign: "center" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginBottom: "12%",
            }}
          >
            <Text style={{ textAlign: "center", color: "black" }}>
              Already have an account?
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "blue" }}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
