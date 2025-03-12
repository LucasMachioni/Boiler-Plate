import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
