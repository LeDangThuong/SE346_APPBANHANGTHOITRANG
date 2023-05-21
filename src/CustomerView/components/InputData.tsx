import React from 'react';
import {Text, TextInput, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';

const InputData = (props: any) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: props.width,
        ...props.style,
        marginVertical: 5,
      }}>
      <Text
        style={{
          color: CUSTOM_COLOR.Black,
          fontSize: 17,
          fontWeight: 'bold',
          marginVertical: '2%',
        }}>
        {props.title}
      </Text>
      <View style={{}}>
        <TextInput
          style={{
            width: '100%',
            height: 45,

            borderRadius: 15,
            fontSize: 17,
            paddingHorizontal: 15,
            backgroundColor: CUSTOM_COLOR.Whisper,
          }}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default InputData;
