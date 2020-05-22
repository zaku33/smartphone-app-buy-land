import "intl";
import "intl/locale-data/jsonp/en-US";

import React, { useEffect } from "react";
import { Text, View, StatusBar } from "react-native";

import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  useEffect(() => {
    StatusBar.setHidden(true);
  });
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
