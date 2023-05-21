import React from 'react';
import {Text, View, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';

const Categories = (props: any) => {
  return (
    <View
      style={{
        width: 300,
        height: 150,
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
      }}>
      <Image
        source={props.source}
        resizeMode="cover"
        style={{
          borderRadius: 30,
          borderColor: CUSTOM_COLOR.FlushOrange,
          width: 300,
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      />
      <View
        style={{
          width: 300,
          backgroundColor: CUSTOM_COLOR.BackgroundText,
          alignItems: 'center',
          position: 'absolute',
          bottom: 45,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: CUSTOM_COLOR.White,
            paddingHorizontal: 40,
            paddingVertical: 10,
            shadowOpacity: 1,
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default Categories;
