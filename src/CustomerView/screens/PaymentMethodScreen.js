import React from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Back, IC_Banking, IC_HandMoney, IC_Location, IC_Momo, IC_MyLocation } from "../assets/icons";
import Button from "../components/Button";
import InputData from "../components/InputData";
import CUSTOM_COLOR from "../constants/colors";

function PaymentMethodScreen({navigation}) {

 

    return (
      <View style = {styles.container}>

            <View style ={{
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: CUSTOM_COLOR.White,
                height: 40
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image
                        source={IC_Back}
                        style = {{
                            width: '20%', 
                            height: '40%',
                            marginHorizontal: 20,
                            marginVertical: '20%'
                        }}
                        resizeMode = 'stretch'
                    />  
                </TouchableOpacity>
                    
              
                <Text style ={{
                    fontSize: 20,
                    color: CUSTOM_COLOR.Black, 
                    fontWeight: 'bold'
                }}>Payment method</Text>
            </View>


            <View style ={styles.viewMethod}>
                <TouchableOpacity style = {styles.radBtn}>

                </TouchableOpacity>
                <Image 
                    style = {styles.image}
                    source = {IC_Momo}
                />
                <Text style = {styles.text}>MOMO Wallet</Text>
            </View>


            <View style ={styles.viewMethod}>
                <TouchableOpacity style = {styles.radBtn}>

                </TouchableOpacity>
                <Image 
                    style = {styles.image}
                    source = {IC_HandMoney}
                />
                <Text style = {styles.text}>Cash payment</Text>
            </View>
            


            <View style ={styles.viewMethod}>
                <TouchableOpacity style = {styles.radBtn}>

                </TouchableOpacity>
                <Image 
                    style = {styles.image}
                    source = {IC_Banking}
                />
                <Text style = {styles.text}>Online banking</Text>
            </View>
           
            <View style ={{
                position: 'absolute',
                top: '82%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style ={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Button 
                        title = 'Continue'
                        color = {CUSTOM_COLOR.FlushOrange}
                        onPress = {() => navigation.navigate('PaymentCard')}
                    />
                </View>
            </View>
            
            
      </View>
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
  },
  radBtn: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Whisper,
    borderWidth: 1, 
    marginRight: '10%'
    
  },
  viewMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10%',
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Alto,
    marginVertical: '2%', 
    paddingVertical: '2%'
  },
  image:{
    width: 35,
    height: 35,
    marginHorizontal: '3%'
  },
  text:{
    fontSize: 17,
    color: CUSTOM_COLOR.Black
  }

})
  
export default PaymentMethodScreen