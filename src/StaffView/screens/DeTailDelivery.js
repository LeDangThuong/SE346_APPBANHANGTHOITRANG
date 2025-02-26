import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackTo from '../components/BackTo'
import CUSTOM_COLOR from '../constants/colors'
import { Address, Delivery, Payment } from '../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { Acount } from './OverView'
import PerSon from '../components/PerSon'
import { IM_MauAo } from '../assets/images'
import ButtonDetail from '../components/ButtonDetail'
import { Firestore } from '../../../Firebase/firebase'
import { collection, onSnapshot, query, doc, getDoc, querySnapshot, getDocs, where, updateDoc } from "firebase/firestore";
import OneOrder from '../components/OneOrder'


const DataDelivery = {
  Name: 'Trung Tinh',
  Phone: '0704408389',
  Address: '140/10 Dinh Bo Linh, Phuong 26, Binh Thanh, Ho Chi Minh',
  CTY: 'Fast Delivery VietNam',
  Code: '#JHGUJHCFJG'
}
export default function DeTailDelivery({ navigation, route }) {

  const { item } = route.params

  const [address, setAddress] = useState()
  const [isLoading, setIsLoading] = useState(true);

  const getAddress = async (item) => {

    const docRef = doc(Firestore, "DIACHI", item);
    const docSnap = await getDoc(docRef);

    const address = {
      ...docSnap.data()
    }

    setAddress(address)
    setIsLoading(false)
  }


  useEffect(() => {
    getAddress(item.MaDC);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(address);
    }
  }, [isLoading]);

  return (
    <ScrollView style={{ backgroundColor: CUSTOM_COLOR.White }}>


      <BackTo
        style={{ marginTop: 20 }}
        Info='Order/DeTails'
        onPress={() => { navigation.goBack() }}
      ></BackTo>
      <View style={{ width: '100%', height: 10, marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
      <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
        <View style={{ width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={Address}
              style={{ width: 30, height: 30, marginLeft: 18 }}
              resizeMode='contain'
            >
            </Image>
            <Text style={{ color: CUSTOM_COLOR.Black, marginLeft: 5, fontSize: 20 }}>Address</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: CUSTOM_COLOR.DarkBlue, marginRight: 20, fontSize: 20, fontWeight: 'bold' }}>COPY</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 50, marginTop: 5, marginRight: 20 }}>
          <Text>{item.TenND}</Text>
          <Text>{item.SDT}</Text>
          {!isLoading && (<Text>{`${address.DiaChi}, ${address.PhuongXa}, ${address.QuanHuyen}, ${address.TinhThanhPho}`}</Text>)}

        </View>
      </View>
      <View style={{ width: '100%', height: 10, marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
      <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
        <View style={{ width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={Delivery}
              style={{ width: 30, height: 30, marginLeft: 18 }}
              resizeMode='contain'
            >
            </Image>
            <Text style={{ color: CUSTOM_COLOR.Black, marginLeft: 5, fontSize: 20 }}>Delivery</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: CUSTOM_COLOR.DarkBlue, marginRight: 20, fontSize: 20, fontWeight: 'bold' }}>SEE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 50, marginTop: 5, marginRight: 20 }}>
          <Text>{DataDelivery.CTY}</Text>
          <Text>Delivery Code: {DataDelivery.Code}</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: 10, marginTop: 10, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
      <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
        <View style={{ width: '100%', flexDirection: 'row', height: 30, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={Payment}
              style={{ width: 30, height: 30, marginLeft: 18 }}
              resizeMode='contain'
            >
            </Image>
            <Text style={{ color: CUSTOM_COLOR.Black, marginLeft: 5, fontSize: 20 }}>Payment</Text>
          </View>
        </View>
        <View style={{ marginLeft: 50, marginTop: 5, marginRight: 20 }}>
          <Text>Provisional: {item.TamTinh}</Text>
          <Text>Delivery fee: {item.PhiVanChuyen}</Text>
          <Text>Discount</Text>
          <Text>Total: {item.TongTien}</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: 10, marginTop: 20, backgroundColor: CUSTOM_COLOR.LightGray }}></View>
      <View>
        <PerSon
          avartar={item.Avatar}
          name={item.TenND}
          id={item.MaND}
        ></PerSon>

        <View>
          <FlatList
            data={item.DatHang}
            renderItem={({ item }) => {

              //console.log(item)
              return (
                <View>

                  <OneOrder
                    source={item.SanPham.HinhAnhSP}
                    title={item.SanPham.TenSP}
                    price={item.SanPham.GiaSP}
                    number={item.SoLuong}
                    color={item.MauSac}
                    size={item.Size}
                    totalPrice={item.ThanhTien}

                  ></OneOrder>

                </View>
              )
            }}
          />
        </View>
        <View style={{ width: '100%', height: 50, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtonDetail
            title='Buyer Contact'
            color={CUSTOM_COLOR.DarkBlue}
            onPress={() => { navigation.navigate('ChatScreen') }}
            style={styles.button}
          ></ButtonDetail>
          <ButtonDetail
            title='Add Note'
            color={CUSTOM_COLOR.DarkBlue}
            onPress={() => { }}
            style={styles.button}
          ></ButtonDetail>
        </View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: CUSTOM_COLOR.DarkOrange }}
          >
            <Text style={{ color: CUSTOM_COLOR.White, fontWeight: 'bold', fontSize: 20 }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 40
  }
})