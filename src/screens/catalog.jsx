import React from 'react'
import vehiculoList from './vehiculoList'
import { View } from 'react-native'

const cataloge = () => {
    const vehicles = [
        {
            id: 1,
            imageUrl: 'https://www.fordelsalvador.com/images/RANGER.webp',
            description: 'Ford',
            price: 25000,
        },
        {
            id: 2,
            imageUrl: 'https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/05b52949-56b5-48ef-8157-a1312e5b882a/v-1679952572/Desktop.webp',
            description: 'Chevrolet',
            price: 500000,


        },
        {
            id: 1,
            imageUrl: 'https://cdn.group.renault.com/ren/co/vehicles/gama/gama-captur.jpg.ximg.xsmall.jpg/7594a94190.jpg',
            description: 'Renault ',
            price: 25000,
        },
    ]
}
return (
    <View>
        <vehiculoList vehicles={vehicles} />
    </View>

);


export default cataloge;
