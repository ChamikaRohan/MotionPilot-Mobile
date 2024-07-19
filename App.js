import React from 'react';
import { SafeAreaView } from 'react-native';
import RemoteControl from './src/components/RemoteControl';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RemoteControl />
    </SafeAreaView>
  );
};

export default App;
