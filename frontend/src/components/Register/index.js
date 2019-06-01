import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import './register.css'


export default class Register extends Component {
    render() {
        return (
            <div className='FormRegister'>
                <div> <img className="logo" src="/images/logo.png" alt='Logo do sistema' /></div>
                <div className='transition'>
                    <button className='buttonL'><Link to={'./'} className='link'>Login</Link></button>
                    <button className='buttonC'>Cadastro</button>
                </div>
                <form className='form'>
                    <select className="select">
                        <option>Tipo de Usuário</option>
                        <option>Professor</option>
                        <option>Aluno</option>
                    </select>
                    <input type='text' name='username' placeholder='Username' className="border-style" />
                    <input type='email' name='email' placeholder='E-mail' className="border-style" />
                    <input type='password' name='pass' placeholder='Password' className="border-style padding" />
                    <button type='submit' className='buttonR'>Cadastrar</button>
                </form>
                <footer className='footerC'>Copyright © Scripta Inc.</footer>
            </div>
        )
    }
}