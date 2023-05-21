import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
const ViewNow = (props: any) => {
  return (
    <View style={styles.button}>
      <Text>+{props.number}</Text>
      <Text>{props.status}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: CUSTOM_COLOR.LightGray,
    width: 65,
    height: 70,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 31.5,
  },
});
export default ViewNow;
