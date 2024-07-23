import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import Categories from "../components/Categories";
import RecipeLsit from "../components/RecipeCard";

const RecipieListScreen = () => {
  return (
      <SafeAreaView style={{ flex: 1,top:40, marginHorizontal:16 }}>
        {/* header */}
        <Header headerText={"Hi, Yugantar"} headerIcon={"bell"}/>
        {/* searchbar */}
        <SearchFilter icon={"search"} placeholder={"Enter your favourite receipe"} />
        {/* categories */}
        <View style={{marginVertical:10}}>
            <Text style={{fontSize:24,fontWeight:"bold"}}>Categories</Text>
            {/* categories list */}
            <Categories/>
        </View>
        {/* receipe list */}
        <View style={{marginVertical:25,flex:1, bottom: 20}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>Recipe</Text>
            {/* receipe list  */}
            <RecipeLsit/>
        </View>
      </SafeAreaView>
  );
};

export default RecipieListScreen;
