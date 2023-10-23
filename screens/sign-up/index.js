import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import {
  ImageBackgroundAuth,
  PasswordInput,
  TextInputCustom,
} from "../../components";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

  const handleChangeUsername = (text) => {
    setUsername(text);
    setIsError({ ...isError, username: !text });
  };

  const handleChangePassword = (text) => {
    setPassword(text);
    setIsError({ ...isError, password: !text });
  };

  const handleChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
    setIsError({ ...isError, confirmPassword: !text });
    setIsConfirmPasswordError(false);
  };

  const handleSignUp = () => {
    if (!username || !password || !confirmPassword) {
      setIsError({
        username: !username,
        password: !password,
        confirmPassword: !confirmPassword,
      });

      return;
    }

    if (password !== confirmPassword) {
      setIsConfirmPasswordError(true);
      return;
    }

    Alert.alert("Thông báo", `Đăng ký thành công!. Bạn có thể đăng nhập.`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handleToSignIn = () => {
    console.log("Go back to Sign in!");
  };

  return (
    <>
      <ImageBackgroundAuth />
      <View style={[styles.container, styles.boxShadow, styles.androidShadow]}>
        <Text style={styles.title}>Sign up</Text>
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
          <PasswordInput
            placeholder="Enter confirm password"
            placeholderTextColor="#979c9f"
            value={confirmPassword}
            onChangeText={handleChangeConfirmPassword}
            isError={isError?.confirmPassword}
            isConfirmPasswordError={isConfirmPasswordError}
          />
          <Pressable style={styles.signUpPressable} onPress={handleSignUp}>
            <Text style={{ color: "#fff" }}>Sign up</Text>
          </Pressable>
          <View style={styles.goBackContainer}>
            <View>
              <Text style={styles.goBackText}>Go back to</Text>
            </View>
            <View style={{ marginLeft: 4 }}>
              <Pressable onPress={handleToSignIn}>
                <Text style={[styles.goBackText, styles.signInText]}>
                  Sign In
                </Text>
              </Pressable>
            </View>
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
    color: "#FF5733",
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
    marginTop: 20,
  },

  goBackContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },

  goBackText: {
    fontSize: 14,
    color: "#88898E",
    fontStyle: "italic",
  },

  signInText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#2D436D",
  },
});
