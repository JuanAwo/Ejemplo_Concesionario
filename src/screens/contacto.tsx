import React from 'react'

const Contacto = () => {
  return (
    <form>
    <view>
    <h2>Contacto</h2>
    <br />
    <p>Concesionario Los pp</p>
    <p>Direccion: Calle 85-68, Ciudad: Medellin</p>
    <p>Telefono: 3144222</p>
    </view>
    <input type='text' name='Nombre' placeholder='Nombre' autoComplete='off'>Nombre</input>
    <input type='text' name='Apellido' placeholder='Apellido' autoComplete='off'>Apellido</input>
    <input type='text' name='email' placeholder='email' autoComplete='off'>Email</input>
    <input type='number' name='Celular' placeholder='Celular' autoComplete='off'></input>
    <button type='submit'>Enviar</button>
</form>
  )
}

export default Contacto

