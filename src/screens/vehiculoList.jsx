import React from 'react';
import { ScrollView } from 'react-native';
import Vehiculo from './vehiculo';

const vehiculoList = ({vehicles}) => {
  return (
    <ScrollView>
        {vehicles.map((vehicle) =>  (
            <Vehiculo
            key={vehicle.id}
            imageUrl={vehicle.imageUrl}
            description={vehicle.price}
            
            
            />

        ))}
    
     
    </ScrollView>
  );

}

export default vehiculoList
