import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
const Categorybutton = (props: any) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: props.color,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 10,
        minWidth: 50,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Black,
        ...props.style,
      }}
      onPress={props.onPress}>
      <Text
        style={{
          color: CUSTOM_COLOR.Black,
          fontWeight: 'bold',
          fontSize: 17,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Categorybutton;
