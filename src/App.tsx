import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { ThemeProvider } from "styled-components";
import { BottomSheetProvider } from "./contexts/bottom-sheet";

//import { Login } from "./screens/Login";
import { Home } from "./screens/Home";

import { theme } from "./styles";

import AppLoading from "expo-app-loading";

LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BottomSheetProvider>
        <StatusBar backgroundColor={theme.colors.background} style="dark" />

        <Home />
      </BottomSheetProvider>
    </ThemeProvider>
  );
}
