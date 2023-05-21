import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
const UserChat = (props: any) => {
  return (
    <TouchableOpacity
      style={{marginTop: 13, flexDirection: 'row', width: '100%', height: 70}}
      onPress={props.onPress}>
      <Image
        resizeMode="contain"
        source={props.source}
        style={{
          height: 65,
          marginLeft: 20,
          aspectRatio: 1,
          borderRadius: 55,
        }}
      />
      <View style={{flexDirection: 'column', marginTop: 7, marginLeft: 10}}>
        <Text
          style={{color: CUSTOM_COLOR.Black, fontWeight: 'bold', fontSize: 20}}>
          {props.name}
        </Text>
        <Text style={{marginTop: 5, fontStyle: 'italic'}}>{props.message}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={props.source1}
        style={{
          marginTop: 28,
          marginLeft: 45,
          width: 15,
          height: 15,
          borderRadius: 55,
          aspectRatio: 1,
        }}
      />
    </TouchableOpacity>
  );
};

export default UserChat;
