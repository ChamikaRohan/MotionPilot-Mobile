import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RemoteControl from './src/components/RemoteControl';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RemoteControl />
      </PaperProvider>
    </SafeAreaProvider>
  );
}