import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { SignIn } from './src/screens/logged/SignIn';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import React from 'react';
import tamaguiConfig from './tamagui.config';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded])

  if (!loaded) {
    return null
  }


  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style='dark' />
      <>
      <SignIn />
      </>
    </TamaguiProvider>
  );
}