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

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    Alert.alert("Success", "You have successfully signed up!");
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
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.textAbove}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#888"
              value={firstName}
              onChangeText={setFirstName}
            />
            <Text style={styles.textAbove}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#888"
              value={lastName}
              onChangeText={setLastName}
            />
            <Text style={styles.textAbove}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
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
            <Text style={styles.textAbove}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Create Account</Text>
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
