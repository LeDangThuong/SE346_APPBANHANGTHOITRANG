import { View, Text, SafeAreaView, 
  StyleSheet,Image,TouchableOpacity,FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import FONT_FAMILY from '../../StaffView/constants/fonts.js';
import Search from '../components/Search';
import scale from '../constants/responsive.js';
import { Acount } from './OverView.js';
import Product from '../../StaffView/components/Product';
import ItemList from '../components/ItemList';
import { IM_Giay1,IM_Giay2,IM_Giay3,IM_Giay4 } from '../assets/images/index.js';
import Size from '../constants/size.js';
import { backto } from '../assets/icons/index.js';

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

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    )
  }

  const handleSearch = (text) => {
    setSearchValue(text);
  }

  const filteredData = datas.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <View>
      <Search
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchValue}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SearchFilter;