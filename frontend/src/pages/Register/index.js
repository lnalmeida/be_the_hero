import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

const Register = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory('')

  async function handleRegister (event) {
    event.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try {
      const response = await api.post('/ongs', data)

      alert(`Sua ID de Acesso: ${response.data.id}`)
    } 
    catch (error) {
      alert('Ops... Algo deu errado... Tente novamente.')
    }

    history.push('/')
  }
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be a Hero' />
          <h1>Cadastro</h1>
          <p>Cadastre sua organização, entre na plataforma e conecte-se com pessoas que querem ajudar</p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#e02041' />
             Cancelar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder='Nome da organização'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder='WhatsApp'
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className='input-group'>
            <input
              placeholder='Cidade'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className='button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register
