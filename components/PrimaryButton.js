import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import React from "react";

const PrimaryButton = ({ children , onPress}) => {
  const handleLongPress = () => {
    Vibration.vibrate(100);
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onLongPress={handleLongPress}
        onPress={onPress}
        style={({pressed}) => pressed ? [styles.buttonInnerContainer , styles.pressed]: styles.buttonInnerContainer}
        android_ripple={{ color: "#4e0329" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
