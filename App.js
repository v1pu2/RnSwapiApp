import React from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import Navigators from './src/containers/Navigators';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
   <Navigators/>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
