import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import {back} from '../assets/icons';
const ItemList = (props: any) => {
  return (
    <View
      style={{
        marginTop: 9,
        flexDirection: 'row',
        width: '100%',
        height: 70,
        elevation: 3,
        shadowColor: CUSTOM_COLOR.Black,
        backgroundColor: CUSTOM_COLOR.White,
      }}>
      <Image
        resizeMode="contain"
        source={props.source}
        style={{height: 65, width: 65, marginLeft: 20}}
      />
      <View style={{flexDirection: 'column', marginTop: 10, marginLeft: 30}}>
        <Text style={{color: CUSTOM_COLOR.Black}}>{props.namelist}</Text>
        <Text style={{marginTop: 5, fontStyle: 'italic'}}>
          {props.numberitem} Product
        </Text>
      </View>
      <Image
        resizeMode="contain"
        source={back}
        style={{marginTop: 23, marginLeft: 130, width: 10, height: 10}}
      />
    </View>
  );
};

export default ItemList;
