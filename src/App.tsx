import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { BottomSheetProvider } from './contexts/bottom-sheet';

import { Home } from './screens/Home';

import { theme } from './styles';

LogBox.ignoreAllLogs();

export default function App() {
  useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <BottomSheetProvider>
        <StatusBar backgroundColor={theme.colors.background} style="dark" />

        <Home />
      </BottomSheetProvider>
    </ThemeProvider>
  );
}
