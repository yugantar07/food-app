import { ScrollView, StyleSheet, View, Text } from "react-native";
import React from "react";
import { categories, colors } from "../screens/Constants";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => {
        return (
          <View
          key={category.id}
            style={{
              backgroundColor: index===0 ? colors.COLOR_PRIMARY:colors.COLOR_LIGHT,
              marginRight: 16,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              elevation:7,
              marginVertical:16
            }}
          >
            <Text style={{color: index===0 && colors.COLOR_LIGHT,fontSize:18}}>{category.category}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
