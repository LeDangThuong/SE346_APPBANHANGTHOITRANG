import React from 'react';
import {Text, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';

const Message = (props: any) => {
  return (
    <View
      style={{
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: props.isRight
            ? CUSTOM_COLOR.ChathamsBlue
            : CUSTOM_COLOR.White,
          maxWidth: '80%',
          alignSelf: props.isRight ? 'flex-end' : 'flex-start',
          borderRadius: 15,
          paddingHorizontal: 10,
          marginHorizontal: 10,
          paddingVertical: 7,
          borderTopRightRadius: props.isRight ? 1 : 15,
          borderTopLeftRadius: props.isRight ? 15 : 1,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: props.isRight ? CUSTOM_COLOR.White : CUSTOM_COLOR.Black,
            fontSize: 15,
            maxWidth: '80%',
          }}>
          {props.content}
        </Text>

        <Text
          style={{
            fontSize: 10,
            alignSelf: 'flex-end',
            marginLeft: 5,
            color: props.isRight ? CUSTOM_COLOR.White : CUSTOM_COLOR.Black,
          }}>
          {props.time}
        </Text>
      </View>
    </View>
  );
};

export default Message;
