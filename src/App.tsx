import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Home } from './screens/Home';

import { theme } from './styles';

export default function App() {
  useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.background} style="dark" />

      <Home />
    </ThemeProvider>
  );
}
