import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, FlatList, View} from 'react-native';
import ItemCard from '../components/ItemCard';
import {getMovies} from '../services/ApiService';

const Home = props => {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await getMovies();
      if (response?.status === 200 && response?.data) {
        setIsLoading(false);
        setAllMovies(response?.data?.results);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
    return () => {
      setAllMovies([]);
    };

  }, []);
  const onCardClick = item => {
    props.navigation.navigate('Detail', {item});
  };

  const renderEventItem = item => {
    return (
      <ItemCard item={item?.item} onPress={() => onCardClick(item?.item)} isCharacter={false}/>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        pagingEnabled={true}
        legacyImplementation={false}
        showsVerticalScrollIndicator={false}
        data={allMovies}
        renderItem={item => renderEventItem(item)}
        keyExtractor={item => item?.item?.episode_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Home;
