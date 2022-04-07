import React, {useState, useEffect} from 'react';

import {StyleSheet, FlatList, View} from 'react-native';
import ItemCard from '../components/ItemCard';
import {getCharacters} from '../services/ApiService';

const DetailScreen = props => {
  const movie = props?.route?.params?.item;
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await getCharacters();
      if (response?.status === 200 && response?.data) {
        setIsLoading(false);
        setAllCharacters(response?.data?.results);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  useEffect(() => {
    const filteredResult = allCharacters.filter(item => {
      return item.films.indexOf(movie?.url) >= 0;
    });
    setFilteredCharacters(filteredResult);
  }, [allCharacters]);
  const renderEventItem = item => {
    return (
      <ItemCard item={item?.item} isCharacter={true}/>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        pagingEnabled={true}
        legacyImplementation={false}
        showsVerticalScrollIndicator={false}
        data={filteredCharacters}
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

export default DetailScreen;
