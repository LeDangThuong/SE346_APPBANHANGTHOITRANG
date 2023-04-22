import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Size from '../constants/size'
const Product = (props: any) => {
    return(
        <View style = {{
            width: Size.DeviceWidth/2 - 65,
            height: 250,
            marginHorizontal: 30,
            marginVertical: 5
        }} >
    
         <Image source={props.source}
            resizeMode='contain'
            style = {{
                width: 150,
                height: 165, 
                borderRadius: 20
                
            }}/>
         <Text style ={{
            fontWeight: 'bold',
            marginVertical: 4
         }}>{props.title}</Text>
         <Text style ={{
            fontSize: 18,
            marginTop: -5
         }}>{props.price} đ</Text> 
          
        </View>
      )
}

export default Product

const styles = StyleSheet.create({})