import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import ProductList from '../screens/ProductList';
import ListItem from '../screens/ListItem';
import { ScrollView } from 'react-native-gesture-handler';

interface ButtonSortedProps {
  onButton1Click: () => void;
  onButton2Click: () => void;
}

const CustomButtonGroup = ({onButton1Click, onButton2Click}: ButtonSortedProps) => {
  const [currentList, setCurrentList] = useState('bestsellers');

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onButton1Click}>
          <Text style={styles.buttonText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onButton2Click}>
          <Text style={styles.buttonText}>List Items</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  buttonContainer: {
    width: 450,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: CUSTOM_COLOR.Carnation,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginRight: 50,
  },
  buttonText: {
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
  productListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButtonGroup;
