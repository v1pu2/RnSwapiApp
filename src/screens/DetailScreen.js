import React, {useState, useEffect} from 'react';

import {StyleSheet, FlatList, View} from 'react-native';
import ItemCard from '../components/ItemCard';
import LoaderView from '../components/LoaderView';
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
        setAllCharacters(response?.data?.results);
        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert('No API Response');
    }
  };
  useEffect(() => {
    callApi();
    return () => {
      setAllCharacters([]);
    };
  }, []);
  useEffect(() => {
    const filteredResult = allCharacters.filter(item => {
      return item.films.indexOf(movie?.url) >= 0;
    });
    setFilteredCharacters(filteredResult);
  }, [allCharacters]);
  const renderEventItem = item => {
    return <ItemCard item={item?.item} isCharacter={true} />;
  };
  return (
    <View style={styles.root}>
      {isLoading && <LoaderView />}
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
