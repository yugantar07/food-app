import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const IndexScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/imageIndex.png")}
        style={styles.image}
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#f96163" }}>
        40K+ Premium Recepies
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 44,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Recipie")}
        style={{
          backgroundColor: "#f96163",
          width: "90%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 400,
    width: 400,
  },
});
