import React from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';

const ItemCard = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <View style={styles.root}>
      <Text>This is app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default ItemCard;