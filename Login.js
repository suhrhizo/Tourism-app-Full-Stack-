import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "test" && password === "password") {
      Alert.alert("Login Successful", "Welcome back!");
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("./assets/login1.jpg")}
        style={{ height: "100%", width: "100%" }}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          style="auto"
        ></StatusBar>
        <View style={styles.container}>
          <BlurView
            intensity={50}
            style={{
              borderWidth: 1,
              padding: 20,
              marginVertical: 50,
              marginHorizontal: 30,
            }}
          >
            <Text style={styles.title}>Sign in</Text>

            <Text style={styles.textAbove}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.textAbove}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Set Password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 24,
    paddingHorizontal: "5%",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
  },
  textAbove: {
    fontSize: 17,
    justifyContent: "flex-start",
    paddingBottom: 3,
    paddingHorizontal: "5%",
    fontWeight: "300",
  },
});
