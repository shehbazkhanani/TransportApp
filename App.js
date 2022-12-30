import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Navigation from "./config/navigation";

function App () {
  return (
   <>
     <NavigationContainer>
  <Navigation /> 
  </NavigationContainer>
   </>
  );
};


export default App;
