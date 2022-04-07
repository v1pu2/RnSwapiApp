import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {getMovies} from '../services/ApiService';

const Home = props => {
  const [allMovies, setAllMovies] = useState([]);
  // const [resData, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await getMovies();
      console.log('response--', JSON.stringify(response));
      if (response?.status === 200 && response?.data) {
        setIsLoading(false);
        // setResData(response?.data);
        setAllMovies(response?.data?.results);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <View style={styles.root}>
      <Text
        style={{color: 'black'}}
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
