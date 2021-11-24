import { StatusBar } from 'expo-status-bar';
// import { AppLoading } from 'expo'
import AppLoading from 'expo-app-loading';
import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import * as Font from 'expo-font'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const loadFonts = () => {
  return Font.loadAsync({
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'scp-regular': require('./assets/fonts/SourceCodePro-Regular.ttf'),
    'scp-bold': require('./assets/fonts/SourceCodePro-Bold.ttf'),
    'scp-medium': require('./assets/fonts/SourceCodePro-Medium.ttf'),
    'scp-semibold': require('./assets/fonts/SourceCodePro-SemiBold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer>
    <Navigation />
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}
