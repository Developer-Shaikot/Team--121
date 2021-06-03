import React from 'react'
import {StyleSheet, View, Text, Image } from 'react-native'


export default function User(props) {
    const { photo1, price} = props.user;
    return (
        
        <View style={styles.container}>
            <Text >{props.user.name}</Text>
            <Image
          source={photo1}
          style={styles.tinyLogo}
        />
        <Text>Price: {price} ৳</Text>
        </View>
    )
}
const styles = StyleSheet.create({
     container: {
    paddingTop: 50,
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  });
  