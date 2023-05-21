import {Text, View, Image} from 'react-native';
import React from 'react';
const PerSon = (props: any) => {
  return (
    <View
      style={{
        marginTop: 10,
        width: '100%',
        height: 60,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: props.avartar}}
        style={{
          width: 40,
          aspectRatio: 1,
          borderRadius: 55,
          marginTop: 15,
          marginLeft: 15,
        }}
        resizeMode="cover"></Image>
      <View style={{flexDirection: 'column', marginLeft: 10, marginTop: 13}}>
        <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
        <Text style={{marginTop: 1, fontWeight: 'bold'}}>ID:{props.id}</Text>
      </View>
    </View>
  );
};

export default PerSon;
