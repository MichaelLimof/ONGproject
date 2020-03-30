import React, { useState } from 'react'
import  './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function Incident() {
  
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [value, setValue] = useState('');

        const ongId = localStorage.getItem('ongId')

        const history = useHistory()

        async function handleNewIncident(evento){
            evento.preventDefault()

            const data = {
                title, 
                description,
                value,
            }
            try {
                 await api.post('/incidents', data,{
                 headers:{
                     Authorization : ongId,
                 }    
                 })
                history.push('/profile')

            } catch (err) {
                alert  ('Erro na geração do Caso, tente Novamente!')
            }
        }

        return (
            <div className="incident-container">

                <div className="content">
                <section>
                <img src={logoImg} alt="Be the Hero"/>
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>                
                <Link className="back-link" to="/profile">
                     <FiArrowLeft  size={20} color="#E02041" />
                    Voltar para a home
                </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                <input type="text" 
                placeholder="Titulo do Caso"
                value={title}
                onChange={evento => setTitle(evento.target.value)}/>

                <textarea  
                placeholder="Descrição"
                value={description}
                onChange={evento => setDescription(evento.target.value)}/>

                <input 
                placeholder="Valor em Reais"
                value={value}
                onChange={evento => setValue(evento.target.value)}/>
               
                 
                 <button className="button" type="submit">CADASTRAR</button>
                 <button type="button" >CANCELAR</button> 
                </form>

                </div>
                </div>

        )
    }

