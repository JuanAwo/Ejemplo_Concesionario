import React from 'react'

const SolicitarPruebas = () => {
  return (
    <form>
        <input type='text' name='Nombre' placeholder='Nombre' autoComplete='off'></input>
        <input type='text' name='Apellido' placeholder='Apellido' autoComplete='off'></input>
        <input type='text' name='Nombre' placeholder='Nombre' autoComplete='off'></input>
        <input type='number' name='Identificacion' placeholder='Identificacion' autoComplete='off'></input>
        <input type='number' name='Celular' placeholder='Celular' autoComplete='off'></input>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default SolicitarPruebas
