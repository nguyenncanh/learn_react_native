import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import {
  ImageBackgroundAuth,
  PasswordInput,
  TextInputCustom,
} from "../../components";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    username: false,
    password: false,
  });

  const handleChangeUsername = (text) => {
    setUsername(text);
    setIsError({ ...isError, username: !text });
  };

  const handleChangePassword = (text) => {
    setPassword(text);
    setIsError({ ...isError, password: !text });
  };

  const handleSignIn = () => {
    if (!username || !password) {
      setIsError({
        username: !username,
        password: !password,
      });

      return;
    }

    Alert.alert("Thông báo", `Đăng nhập thành công!. Xin chào ${username}.`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handleToSignUp = () => {
    Alert.alert("Thông báo", `Đăng ký thành công!. Bạn có thể đăng nhập.`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <>
      <ImageBackgroundAuth />
      <View style={[styles.container, styles.boxShadow, styles.androidShadow]}>
        <Text style={styles.title}>Sign in</Text>
        <View style={styles.formContainer}>
          <TextInputCustom
            style={styles.usernameInput}
            placeholder="Enter username"
            placeholderTextColor="#979c9f"
            value={username}
            onChangeText={handleChangeUsername}
            isError={isError?.username}
          />
          <PasswordInput
            placeholder="Enter password"
            placeholderTextColor="#979c9f"
            value={password}
            onChangeText={handleChangePassword}
            isError={isError?.password}
          />
          <Pressable style={styles.signInPressable} onPress={handleSignIn}>
            <Text style={{ color: "#fff" }}>Sign in</Text>
          </Pressable>
          <View style={styles.signupContainer}>
            <Text style={styles.signUpText}>
              If you don't have account.{" "}
              <Text style={[styles.signUpText, styles.signupTextColor]}>
                Let's sign up!
              </Text>
            </Text>
            <Pressable style={styles.signUpPressable} onPress={handleToSignUp}>
              <Text style={{ color: "#fff" }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },

  boxShadow: {
    shadowColor: "#333",
    shadowOffset: {
      height: -4,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  androidShadow: {
    elevation: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2D436D",
  },

  formContainer: {
    width: "95%",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    rowGap: 15,
  },

  usernameInput: {
    width: "100%",
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: "#c1c1c1",
    borderRadius: 20,
  },

  signInPressable: {
    width: "100%",
    height: 40,
    backgroundColor: "#2D436D",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  signupContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },

  signUpText: {
    fontSize: 12,
    color: "#88898E",
    fontStyle: "italic",
  },

  signupTextColor: {
    color: "#FF5733",
  },

  signUpPressable: {
    width: "100%",
    height: 40,
    backgroundColor: "#FF5733",
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
