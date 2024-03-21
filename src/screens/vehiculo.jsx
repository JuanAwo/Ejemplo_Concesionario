import React from 'react'
import { StyleSheet } from 'react-native'

const vehiculo = (urlImage, description, price) => {
  return (
    <view style={styles.container}>
        <image
            style={styles.img}
            source={{url:urlImage}}
        
        />
        <text style={styles.title}>{description}</text>
        <text style={styles.price}>$ {price}</text>
    </view>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start'
    },
    img:{
        width: 300,
        height: 300,
    },
    title:{
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
    },
    price:{
        fontSize: 35
    }
})

export default vehiculo
