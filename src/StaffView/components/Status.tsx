import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Status = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flex: 1,
        marginTop: 8,
        borderBottomWidth: props.botwidth,
        borderColor: props.borderColor,
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Text style={{color: props.Color, fontSize: 13}}>{props.title}</Text>
      <Text style={{color: props.Color, fontSize: 13}}>(0)</Text>
    </TouchableOpacity>
  );
};

export default Status;
