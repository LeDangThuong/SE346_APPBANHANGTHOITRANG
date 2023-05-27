import { View, Text, SafeAreaView, 
  StyleSheet,Image,TouchableOpacity,FlatList, ScrollView, TouchableWithoutFeedback, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import scale from '../constants/responsive.js';
import { Acount } from './OverView.js';
import Product from '../../StaffView/components/Product';
import ItemList from '../components/ItemList';

import Size from '../constants/size.js';
import { backto } from '../assets/icons/index.js';
import CustomButton from '../../Login_SignUp/components/Buttons/CustomButton.js';
import ProductList from './ProductList.js';
import { IM_Giay1,IM_Giay2,IM_Giay3,IM_Giay4 } from '../assets/images/index.js';
import filter from 'lodash.filter';
import CustomButtonGroup from '../components/ButtonSorted.tsx';

const datas = [
  {
      id: '1',
      source: IM_Giay1,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '2',
      source: IM_Giay2,
      title: 'T-Shirt White Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '3',
      source: IM_Giay3,
      title: 'T-Shirt White Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '4',
      source: IM_Giay4,
      title: 'T-Shirt White Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '5',
      source: IM_Giay3,
      title: 'T-Shirt White Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '6',
      source: IM_Giay1,
      title: 'T-Shirt White Blank - VSD343545D - New Elevent',
      price: 399999
  }
]
export default function ViewShop1(){
  
  const [list, setList] = useState(datas);

  const [searchList, setSearchList] = useState([]);

  const handleSearch = (text) => {
    const filteredData = datas.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });

    setSearchList(filteredData);
  };
  return (
    <ScrollView>
      <SafeAreaView style = {{flex: 1, marginHorizontal : 0, paddingTop: 20, justifyContent: 'center',alignItems: 'center',}}>
      
        <TextInput 
          placeholder='Search in here' 
          clearButtonMode='always' 
          style={styles.searchBox}
          autoCapitialize = "none"
          autoCorrect = {false}
          value={searchList}
          onChangeText={handleSearch}
          />
        <View style = {styles.CircleAvatar}>
        </View>
        <Text style = {styles.title}> FAUGET CLOTHES</Text>
        <CustomButtonGroup/>
        {setSearchList.length > 0 ?
          (<ProductList data= {searchList}/>):(
            <View style={styles.container}>
            <ProductList data={datas} />
          </View>
          )
        }
        
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CircleAvatar:{
    margin : 20,
    marginLeft: 20,
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: CUSTOM_COLOR.DarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  productItem: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  searchBox: {
    width: 380,
    height : 50,
    paddingHorizontal: 20, 
    marginHorizontal: 10, 
    paddingVertical: 10,
    borderWidth:1,
    borderRadius:8,
  },
  title:{
    font: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.DarkBlue,
    marginBottom: 10,
    
    fontSize: 25,
    textAlign : 'center',
    alignItems: 'center',
  }

});