import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ImageBackground,
} from "react-native";
import { useState, useCallback } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    if (!username || !password) {
      Alert.alert(
        "Cảnh báo",
        `Vui lòng nhập ${!username ? "username" : "password"}!`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
      return;
    }

    Alert.alert(
      "Thông báo",
      `Đăng nhập thành công!. Chào mừng ${username} quay lại.`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  const handleSignUp = () => {
    Alert.alert("Thông báo", `Đăng ký thành công!. Bạn có thể đăng nhập.`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const toggleShowPassword = () => setIsShowPassword(!isShowPassword);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={true}
        behavior="padding"
      >
        <View style={styles.container} onLayout={onLayoutRootView}>
          <ImageBackground
            source={{ uri: "https://picsum.photos/800" }}
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
            }}
          ></ImageBackground>
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: 20,
              paddingTop: 30,
              paddingBottom: 60,
              border: "1px solid #c1c1c1",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              boxShadow: "0px -100px 100px 9px rgba(0,0,0,0.1)",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
            <View
              style={{
                width: "95%",
                maxWidth: 400,
                display: "flex",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: 50,
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#c1c1c1",
                  borderRadius: 20,
                }}
                placeholder="Please enter your username"
                placeholderTextColor="#979c9f"
                value={username}
                onChangeText={handleChangeUsername}
              />
              <View style={{ position: "relative", width: "100%" }}>
                <TextInput
                  style={{
                    width: "100%",
                    height: 50,
                    padding: 12,
                    paddingRight: 40,
                    borderWidth: 1,
                    borderColor: "#c1c1c1",
                    borderRadius: 20,
                    marginTop: 10,
                    marginBottom: 14,
                  }}
                  secureTextEntry={isShowPassword}
                  placeholder="Please enter your password"
                  placeholderTextColor="#979c9f"
                  value={password}
                  onChangeText={handleChangePassword}
                />
                <Pressable
                  style={{ position: "absolute", right: 10, top: 24 }}
                  onPress={toggleShowPassword}
                >
                  {isShowPassword ? (
                    <MaterialIcons name="visibility" size={21} color="black" />
                  ) : (
                    <FontAwesome
                      name={isShowPassword ? "visibility" : "low-vision"}
                      size={19}
                      color="black"
                    />
                  )}
                </Pressable>
              </View>

              <Pressable
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#2D436D",
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handleSignIn}
              >
                <Text style={{ color: "#fff" }}>Sign in</Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 10,
                  marginTop: 10,
                  color: "#88898E",
                  fontStyle: "italic",
                }}
              >
                If you don't have account. Sign up!
              </Text>
              <Pressable
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#FF5733",
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handleSignUp}
              >
                <Text style={{ color: "#fff" }}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
