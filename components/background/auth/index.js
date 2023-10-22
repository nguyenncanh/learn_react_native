import { ImageBackground } from "react-native";

const ImageBackgroundAuth = () => {
  return (
    <>
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
      />
    </>
  );
};

export default ImageBackgroundAuth;
