import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ProductList = ({ data, handleSearch}) => {
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
      numColumns={2}
      columnWrapperStyle={styles.row}
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
    height: 250,
    width: 180,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
   
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 5,
    textAlign: 'center',
    marginBottom: 1,
  },
  price: {
    color: 'red',
    margin: 1,
    borderWidth: 1,
    borderRadius: 10,
  
    textAlign: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ProductList;
