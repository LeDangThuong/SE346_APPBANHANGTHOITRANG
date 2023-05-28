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
import ListItems from './ListItem.js';

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
const dataList = [
  {
    id: '1',
    source: IM_Giay1,
    title: 'LIMITED EDITION SHOES PACKET 2021',
  },
  {
    id: '2',
    source: IM_Giay1,
    title: 'LIMITED EDITION SHOES PACKET 2022',
  },  
  {
    id: '3',
    source: IM_Giay1,
    title: 'LIMITED EDITION SHOES PACKET 2023',
  },
]
export default function ViewShop1(){
  
  const [currentState, setCurrentState] = useState('flatlist1');
  const [currentDataList, setCurrentDataList] = useState(datas);

  const [defaultDataList1, setDefaultDataList1] = useState(datas);
  const [defaultDataList2, setDefaultDataList2] = useState(dataList);

  const [searchResult1, setSearchResult1] = useState([]);
  const [searchResult2, setSearchResult2] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]); // HANDLE TỰ ĐỘNG
  const handleSearch = (text) => {
  setSearchText(text);
  let filteredDataList;
  if (currentState === 'flatlist1') {
    if (text.length < 1) {
      setCurrentDataList(defaultDataList1);
      setSearchResult1([]);
    } else {
      filteredDataList = filter(datas, (item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setCurrentDataList(filteredDataList);
    }
  } else {
    if (text.length < 1) {
      setCurrentDataList(defaultDataList2);
      setSearchResult2([]);
    } else {
      filteredDataList = filter(dataList, (item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setCurrentDataList(filteredDataList);
    }
  }
};

  const handleButton1Click = () => {
    setCurrentState('flatlist1');
    setCurrentDataList(datas);
  };

  const handleButton2Click = () => {
    setCurrentState('flatlist2');
    setCurrentDataList(dataList);
  };
  return (
    <ScrollView>
      <SafeAreaView style = {{flex: 1, marginHorizontal : 0, paddingTop: 20,}}>
      
        <TextInput 
          placeholder='Search in here' 
          clearButtonMode='always' 
          style={styles.searchBox}
          autoCapitialize = "none"
          autoCorrect = {false}
          onChangeText={handleSearch}
          value={searchText}
                  
          />
        <View style = {styles.CircleAvatar}>
        </View>
        <Text style = {styles.title}> FAUGET CLOTHES</Text>
        <CustomButtonGroup 
        onButton1Click={handleButton1Click}
        onButton2Click={handleButton2Click}
        />
        {currentState === 'flatlist1' ?(
          <ProductList data = {currentDataList} />
        ):
        (
          <ListItems data = {currentDataList}/>
        )}
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
    marginLeft: 180,
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