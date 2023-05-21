import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {StartCorner, StartFull} from '../assets/icons';

const StartRating = (props: any) => {
  const star = [];

  for (let x = 1; x <= props.nums; x++) {
    star.push(
      <TouchableWithoutFeedback key={x} onPress={() => (props.fill = x)}>
        <Image
          source={x <= props.fill ? StartCorner : StartFull}
          style={{
            width: 20,
            height: 20,
            marginHorizontal: 1,
          }}
        />
      </TouchableWithoutFeedback>,
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {star}
    </View>
  );
};

export default StartRating;
