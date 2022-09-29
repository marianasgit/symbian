import { Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/bellefair';
import { fontsToImport } from './src/style/fonts';

import Register from './src/pages/Register';

export default function App() {
  
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) {
    return null
  }

  return (
    <Register />
  )
}