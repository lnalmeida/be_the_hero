import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

const NewIncident = props => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  const history = useHistory()


  async function handleNewIncident (event ) {
    event.preventDefault()

    const data = {
      title,
      description, 
      value
    }
    try {
      await api.post('/incidents', data, {
        headers: {
          authorization: ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro cadastrando esse caso... Tente novamente.')
    }
    console.log(data)
  }
  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be a Hero' />
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontra heróis que ajudarão a resolver isso.</p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#e02041' />
             Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder='Título do caso'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea 
            placeholder='Descrição detalhada do caso' 
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input 
            placeholder='Valor em Reais' 
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className='button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident
