import React, { useState } from "react";
import { Redirect, Stack } from "expo-router";
import "react-native-gesture-handler";
import "react-native-reanimated";

export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
}
