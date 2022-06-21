import React from 'react';
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"

import Welcome from './screens/Welcome';

export default function App() {
  let [] = useFonts({
    "Lato"
  })
  return (
    <Welcome/>
  );
}