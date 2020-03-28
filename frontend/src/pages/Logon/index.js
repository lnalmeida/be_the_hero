import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import heroesImage from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

const Logon = props => {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin (e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      
      history.push('/profile')
    }catch (error) {
      alert('Falha no Login. Tente novamente.')
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='logo' />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            placeholder='Sua ID' 
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className='button' type='submit'>Entrar</button>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#e02041' />
             Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt='Be a Hero' />
    </div>
  )
}

export default Logon
