import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';

const OneOrder = (props: any) => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        flexDirection: 'column',
        marginTop: 10,
      }}>
      <View
        style={{
          width: '100%',
          height: 145,
          borderBottomWidth: 0.5,
          flexDirection: 'row',
        }}>
        <Image
          source={props.source}
          style={{width: 80, height: 80, marginLeft: 35}}
          resizeMode="cover"></Image>
        <View style={{flexDirection: 'column', marginLeft: 10, width: 250}}>
          <Text>{props.title}</Text>
          <Text style={{fontWeight: 'bold'}}>{props.price}</Text>
          <Text>x{props.number}</Text>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text style={{marginLeft: 140, fontWeight: 'bold'}}>
              {props.totalPrice}
            </Text>
          </View>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              backgroundColor: CUSTOM_COLOR.DarkOrange,
              width: 100,
              marginLeft: 160,
              marginTop: 10,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: CUSTOM_COLOR.White}}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{marginLeft: 35}}>Item Code</Text>
        <Text style={{marginRight: 35}}>{props.Code}</Text>
      </View>
      <View style={{width: '100%', height: 30, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={props.PressCofirm}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: CUSTOM_COLOR.DarkOrange,
          }}>
          <Text style={{color: CUSTOM_COLOR.White}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OneOrder;
