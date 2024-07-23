import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "./Constants";
import { Ionicons } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ backgroundColor: colors.COLOR_PRIMARY, flex: 1 }}>
      <SafeAreaView style={{ marginHorizontal: 16 }}>
        <Pressable
          style={{ top: 50 }}
          onPress={() => navigation.navigate("Recipie")}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </Pressable>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: colors.COLOR_LIGHT,
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View style={{ height: 200, width: 200, top: -100 }}>
          <Image
            source={item.image}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
              borderRadius: 100,
              position: "absolute",
            }}
          />
        </View>
        <Text style={{ fontSize: 28, fontWeight: "bold", bottom: 70 }}>
          {item.name}
        </Text>
        <Text style={{ bottom: 40, paddingHorizontal: 16, fontSize: 16 }}>
          {item.description}
        </Text>

        <View style={{ flexDirection: "row", justifyContent:"space-between",width:"100%"}}>
          <View
            style={{
              backgroundColor: "pink",
              padding: 26,
              alignItems: "center",
              borderRadius: 8,
              marginHorizontal:16 
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 10 }}>⏰</Text>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.time}</Text>
          </View>
          <View
            style={{
              backgroundColor: "skyblue",
              padding: 26,
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 10 }}>🍲</Text>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.difficulty}</Text>
          </View>
          <View
            style={{
              backgroundColor: "beige",
              padding: 26,
              alignItems: "center",
              borderRadius: 8,
              marginHorizontal:16 
            }}
          >
            <Text style={{ fontSize: 40, marginBottom: 10 }}>🔥</Text>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.calories}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;
