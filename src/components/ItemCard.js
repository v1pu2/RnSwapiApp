import React from 'react';

import {Text, View} from 'react-native';
import c_styles from '../theme/CommonStyles';
import Button from './Button';

const ItemCard = ({item, onPress, isCharacter}) => {
  return (
    <View style={c_styles.rootCard}>
      {isCharacter ? (
        <View>
          <Text style={c_styles.txtCardTitle}>Name: {item?.name}</Text>
          <Text style={c_styles.txtCardInfo}>Height: {item?.height}</Text>
          <Text style={c_styles.txtCardInfo}>Gender: {item?.gender}</Text>
          <Text style={c_styles.txtCardInfo}>Birth Year: {item?.birth_year}</Text>
        </View>
      ) : (
        <View>
          <Text style={c_styles.txtCardTitle}>Title: {item?.title}</Text>
          <Text style={c_styles.txtCardInfo}>Episode: {item?.episode_id}</Text>
          <Text style={c_styles.txtCardInfo}>
            Release Date: {item?.release_date}
          </Text>
          <Text style={c_styles.txtCardInfo}>
            Film Director: {item?.director}
          </Text>
          <Button text="Film Details" onPress={onPress} />
        </View>
      )}
    </View>
  );
};

export default ItemCard;
