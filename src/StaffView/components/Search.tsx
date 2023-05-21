import React from 'react';
import {TextInput, View, Image} from 'react-native';
import {SearchIcon} from '../../CustomerView/assets/icons/index.js';
import CUSTOM_COLOR from '../constants/colors';

const Search = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        height: 40,
        width: 370,
        backgroundColor: CUSTOM_COLOR.White,
        margin: 10,
        ...props.style,
      }}>
      <Image
        style={{
          marginRight: 5,
          width: 20,
          height: 20,
        }}
        source={SearchIcon}
      />
      <TextInput
        style={{width: '70%', height: 30, borderWidth: 0, padding: 5}}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default Search;
