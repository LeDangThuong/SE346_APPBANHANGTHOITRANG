import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonDetail from './ButtonDetail';
import {WareHouse, Love, Sold, ViewPerSon} from '../assets/icons';
import CUSTOM_COLOR from '../constants/colors';
const MyProduct1 = (props: any) => {
  return (
    <View
      style={{
        marginTop: 15,
        width: '100%',
        height: 230,
        borderBottomWidth: 0.5,
        flexDirection: 'column',
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          borderBottomWidth: 0.5,
          flexDirection: 'row',
        }}>
        <Image
          source={props.source}
          style={{width: 80, height: 80, marginLeft: 15}}
          resizeMode="cover"></Image>
        <View style={{flexDirection: 'column', marginLeft: 10, width: 200}}>
          <Text>{props.title}</Text>
          <Text style={{fontWeight: 'bold'}}>{props.price}</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 70,
          borderBottomWidth: 0.5,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
            height: 70,
            marginLeft: '10%',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={WareHouse}
              style={{width: 20, height: 20}}
              resizeMode="stretch"></Image>
            <Text style={{marginLeft: 10}}>WareHouse:</Text>
            <Text>{props.soluongtonkho}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Love}
              style={{width: 20, height: 20}}
              resizeMode="stretch"></Image>
            <Text style={{marginLeft: 10}}>Love:</Text>
            <Text>{props.soluonglove}</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: 70,
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Sold}
              style={{width: 20, height: 20}}
              resizeMode="stretch"></Image>
            <Text style={{marginLeft: 10}}>Sold Out:</Text>
            <Text>{props.soluongban}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ViewPerSon}
              style={{width: 20, height: 20}}
              resizeMode="stretch"></Image>
            <Text style={{marginLeft: 10}}>Views:</Text>
            <Text>{props.soluongview}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 60,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <ButtonDetail
          title="Hide"
          color={CUSTOM_COLOR.DarkOrange}
          onPress={props.hide}
          style={styles.button}></ButtonDetail>
        <ButtonDetail
          title="Edit"
          color={CUSTOM_COLOR.DarkOrange}
          onPress={props.edit}
          style={styles.button}></ButtonDetail>
      </View>
    </View>
  );
};

export default MyProduct1;

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 40,
  },
});
