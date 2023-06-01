import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, Image, View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';

const ListItems = ({ data }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (

        <TouchableOpacity onPress={() => navigation.navigate('ViewShop2', { product: item })}>
          <View style={styles.item}>
            <Image style={styles.image} source={item.source} resizeMode='cover'/>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          </View>
        </TouchableOpacity>

    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}    
      numColumns={0}
      contentContainerStyle={styles.container}  
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5, 
    paddingVertical: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height:100,
    width: 380,
    padding: 20,
    marginVertical: 6,
    borderWidth: 0.5,
    borderColor: CUSTOM_COLOR.DarkBlue,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  title: {

    fontSize: 16,
    fontFamily: FONT_FAMILY.Bold,
    flexWrap: 'wrap'
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ListItems;
