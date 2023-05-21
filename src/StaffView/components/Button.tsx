import {TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Button = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={props.source}
        style={{width: '50%', height: '70%', marginLeft: '31%'}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default Button;
