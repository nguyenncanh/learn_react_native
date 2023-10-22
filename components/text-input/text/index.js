import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputCustom = (props) => {
  const { isError, placeholder } = props || {};

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {isError && (
        <Text style={styles.error}>
          Please{" "}
          <Text style={{ textTransform: "lowercase" }}>{placeholder}</Text>
        </Text>
      )}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: { width: "100%" },

  input: {
    width: "100%",
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: "#c1c1c1",
    borderRadius: 20,
  },

  error: {
    color: "#E74C3C",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 4,
  },
});
