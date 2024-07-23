import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        marginVertical: 16,
        paddingHorizontal:16,
        alignItems:"center",

        elevation:7
      }}
    >
      <Feather name={icon} size={20} color="#f96163" />
      <TextInput style={{paddingLeft:8,fontSize:16,color:"#808080",flex:1}}>{placeholder}</TextInput>
    </View>
  );
};

export default SearchFilter;
