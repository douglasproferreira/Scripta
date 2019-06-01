import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './login.css'

export default class Login extends Component {

    render() {
        return (
            <div className='FormLogin'>
                <div> <img className="logo" src="/images/logo.png" alt="logo da plataforma" /></div>
                <div className='transitionL'>
                    <button className='buttonLogin'>Login</button>
                    <button className='buttonCadastro'><Link to={'./register'} className='link'>Cadastro</Link></button>
                </div>
                <form className='formL'>
                    <input type='email' name='email' placeholder='E-mail' className="border-style" />
                    <input type='password' name='pass' placeholder='Password' className="border-style padding" />
                    <button type='submit' className='buttonE'>Entrar</button>
                </form>
                <footer className='footerL'>Copyright © Scripta Inc.</footer>
            </div>
        )
    }
}
