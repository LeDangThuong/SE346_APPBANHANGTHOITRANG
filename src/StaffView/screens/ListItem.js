import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FONT_FAMILY from '../constants/fonts';

const ListItems= ({ data}) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ViewShop2', { product: item })}>
        <View style={styles.item}>
          <Image style={styles.image} source={item.source} resizeMode='cover'/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={1}
      
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8, 
    paddingVertical: 16,
  },
  item: {
    margin: 8,
    height: 100,
    width: 380,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 280,
    alignItems: 'flex-start'
   
  },
  title: {
    fontFamily: FONT_FAMILY.Bold,
    marginBottom: 10,


  },

  row: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ListItems;
