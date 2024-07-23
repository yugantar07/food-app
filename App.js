import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./screens/IndexScreen";
import RecipieListScreen from "./screens/RecipieListScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Recipie" component={RecipieListScreen} />
        <Stack.Screen name="RecipieDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
