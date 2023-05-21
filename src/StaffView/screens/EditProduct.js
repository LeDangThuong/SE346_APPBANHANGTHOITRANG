import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackTo from '../components/BackTo';
import CUSTOM_COLOR from '../constants/colors';
import ButtonDetail from '../components/ButtonDetail';
import {AddImage} from '../assets/images';
import Search from '../components/Search';
import Categorybutton from '../components/categorybutton';
export default function EditProduct({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: CUSTOM_COLOR.White,
      }}>
      <BackTo
        onPress={() => {
          navigation.goBack();
        }}
        Info="Edit Product"
      />
      <ScrollView style={{backgroundColor: CUSTOM_COLOR.White}}>
        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 10,
            elevation: 2,
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{width: 90, height: 90, marginTop: 10, marginLeft: 50}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={AddImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 30}}>(Add picture or video)</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 90,
            marginTop: 10,
            elevation: 2,
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
            flexDirection: 'column',
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Name Of Product</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
            <Text style={{marginLeft: 220}}>0/200</Text>
          </View>
          <TextInput style={{marginLeft: 15}} />
        </View>
        <View
          style={{
            width: '100%',
            height: 130,
            marginTop: 10,
            flexDirection: 'column',
            elevation: 2,
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Description</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
            <Text style={{marginLeft: 260}}>0/200</Text>
          </View>
          <TextInput style={{marginLeft: 15}} />
        </View>
        <View
          style={{
            width: '100%',
            height: 90,
            marginTop: 10,
            elevation: 2,
            flexDirection: 'column',
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Price</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={{marginLeft: 15, width: 200}} />
            <Text style={{marginLeft: 150, marginTop: 12}}>VND</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 90,
            marginTop: 10,
            elevation: 2,
            flexDirection: 'column',
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Delivery fee</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={{marginLeft: 15, width: 200}} />
            <Text style={{marginLeft: 150, marginTop: 12}}>VND</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 90,
            marginTop: 10,
            elevation: 2,
            borderRadius: 0.5,
            flexDirection: 'column',
            shadowColor: CUSTOM_COLOR.Black,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Amount</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
          </View>
          <TextInput style={{marginLeft: 15}} />
        </View>
        <View
          style={{
            width: '100%',
            height: 200,
            marginTop: 10,
            elevation: 2,
            flexDirection: 'column',
            borderRadius: 0.5,
            shadowColor: CUSTOM_COLOR.Black,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 15}}>
            <Text>Categorize</Text>
            <Text style={{color: CUSTOM_COLOR.Red}}> *</Text>
          </View>
          <View>
            <Search
              style={{width: 200, marginTop: 10, marginLeft: 5, height: 30}}
              placeholder="Search list item "
            />
          </View>

          <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
            <Categorybutton
              title="Shoes"
              style={{width: 100, height: 40, marginLeft: 10}}
            />
            <Categorybutton
              title="T-Shirt"
              style={{width: 100, height: 40, marginLeft: 10}}
            />
            <Categorybutton
              title="Hat"
              style={{width: 100, height: 40, marginLeft: 10}}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', width: '100%', marginTop: 30}}>
          <ButtonDetail
            title="Edit now"
            style={{width: 150, height: 50}}
            onPress={() => {}}
            color={CUSTOM_COLOR.DarkOrange}
          />
        </View>
      </ScrollView>
    </View>
  );
}
