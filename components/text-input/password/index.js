import { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const PasswordInput = (props) => {
  const { isError, placeholder, isConfirmPasswordError } = props || {};
  const [isShowPassword, setIsShowPassword] = useState(true);

  const toggleShowPassword = () => setIsShowPassword(!isShowPassword);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={isShowPassword}
        {...props}
      />
      <Pressable style={styles.pressable} onPress={toggleShowPassword}>
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
      {isError && (
        <Text style={styles.error}>
          Please{" "}
          <Text style={{ textTransform: "lowercase" }}>{placeholder}</Text>
        </Text>
      )}
      {isConfirmPasswordError && (
        <Text style={styles.error}>Please make sure your passwords math</Text>
      )}
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: { position: "relative", width: "100%" },

  input: {
    width: "100%",
    height: 50,
    padding: 12,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: "#c1c1c1",
    borderRadius: 20,
  },

  pressable: {
    position: "absolute",
    right: 0,
    transform: [{ translateY: 15 }, { translateX: -10 }],
  },

  error: {
    color: "#E74C3C",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 4,
  },
});
