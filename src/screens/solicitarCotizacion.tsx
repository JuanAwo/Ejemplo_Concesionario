import React from 'react'

const SolicitarCotizacion = () => {
  return (
 <form>
    <input type='text' name='Nombre' placeholder='Nombre' autoComplete='off'></input>
    <input type='text' name='Apellido' placeholder='Apellido' autoComplete='off'></input>
    <input type='text' name='Cotizacion' placeholder='Cotizacion' autoComplete='off'>¿Que vehiculo Deseas cotizar?</input>
    <input type='text' name='' placeholder='' autoComplete='off'>¿Nuevo O Usado?</input>
    <button type='submit'>Enviar</button>
    
 </form>
  )
}

export default SolicitarCotizacion
