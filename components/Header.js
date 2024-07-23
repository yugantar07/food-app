import { StyleSheet, View ,Text} from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';

const Header = ({headerText,headerIcon}) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Text style={{flex:1,fontSize:24,fontWeight:"700"}}>{headerText}</Text>
      <Feather name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;