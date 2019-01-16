import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import Carousel from "pinar";

const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  } as ViewStyle,
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  } as ViewStyle,
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  } as ViewStyle,
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  } as TextStyle
};

export const Basic2Carousels = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Carousel>
      <View style={styles.slide1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>3</Text>
      </View>
    </Carousel>
    <Carousel index={1} horizontal={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>3</Text>
      </View>
    </Carousel>
  </View>
);
