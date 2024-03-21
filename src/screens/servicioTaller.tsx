import React from 'react'
import { Text } from 'react-native'

const ServicioTaller = () => {
  return (
    <form>
    
    <input type='text' name='DD/MM/AA' placeholder='DD/MM/AA' autoComplete='off'>¿Que Dia deseas tu servicio?</input>
    <input type='text' name='' placeholder='' autoComplete='off'>¿Que servicio Deseas?</input>
    <Text>Ofertamos Mantenimiento, Reparacion y Revision Tecnica</Text>
    <button type='submit'>Enviar</button>
    
 </form>
  )
}

export default ServicioTaller
