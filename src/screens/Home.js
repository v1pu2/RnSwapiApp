import React from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const Home = (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <View style={[styles.root, backgroundStyle]}>
      <Text
        style={{color: isDarkMode ? 'white' : 'black'}}
        onPress={() => props.navigation.navigate('Detail')}>
        This is home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Home;