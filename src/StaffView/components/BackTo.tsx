import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {backto} from '../assets/icons';
import CUSTOM_COLOR from '../constants/colors';
const BackTo = (props: any) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 5, ...props.style}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{width: 17, height: 17, marginLeft: 18, marginTop: 5}}>
        <Image
          resizeMode="contain"
          source={backto}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <Text style={{color: CUSTOM_COLOR.Black, fontSize: 18, marginLeft: 10}}>
        {props.Info}
      </Text>
    </View>
  );
};

export default BackTo;
