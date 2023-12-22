import React, { useState } from 'react'

function CheckoutForm({onConfirm}) {
    const [nombre, setNombre] = useState('')
    const [phone, setphone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (evento) =>{
        evento.preventDefault()

        const userData = {
            nombre, phone,email
        }

        onConfirm(userData)
    }
  return (
    <div>
        <form onSubmit={handleConfirm}>
            <label>
                Nombre
                <input type='text' value={nombre} onChange={({target}) => setNombre(target.value)}/> 
            </label>
            <label>
                Numero de telefono
                <input type='number' value={phone} onChange={({target}) => setphone(target.value)}/> 
            </label>
            <label>
                Email
                <input type='text' value={email} onChange={({target}) => setEmail(target.value)}/> 
            </label>
            <button type="submit" className='button'>Confirmar</button>
        </form>
    </div>
  )
}

export default CheckoutForm