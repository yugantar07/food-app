import { FlatList, StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";
import { colors, receipeList } from "../screens/Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeLsit = () => {
    const navigation= useNavigation();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={receipeList}
        renderItem={({ item }) => (
          <Pressable
          onPress={()=>navigation.navigate("RecipieDetails",{item:item} )}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              elevation: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingVertical: 26,
              paddingHorizontal: 8,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "cover" }}
            />
            <Text style={{marginTop:8,fontWeight:500}}>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <AntDesign name="star" size={16} color={colors.COLOR_PRIMARY} />
              <Text style={{ marginLeft: 5,fontWeight:500 }}>{item.rating}</Text>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
      />
    </View>
  );
};

export default RecipeLsit;
