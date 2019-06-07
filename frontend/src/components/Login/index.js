import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import './login.css'
import api from '../../services/api';

export default class Login extends Component {

    state = {
        email: '',
        pass: '',
        from: false,
        path: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, pass } = this.state;

        if (email === '' || pass === '')
            return alert('Há campos obrigatórios em branco!');

        try {
            const response = await api.post('/user/authenticate', {
                email: this.state.email,
                password: this.state.pass
            })
            alert('Autenticado com sucesso!')
            console.log(response)
            await localStorage.setItem('token', response.data.token)

            this.nextPage();

        } catch (err) {
            console.log(err)
            return alert('Erro de autenticação');
        }
    }



    nextPage = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/classroom/listUser', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.verificar(data) })
            .catch(err => { console.log(err) })
    }

    verificar = (data) => {
        if (data === []) {
            return this.setState({ path: '/home', from: true });
        } else
            return this.setState({ path: '/class', from: true });
    }

    render() {
        if (this.state.from) {
            return <Redirect to={this.state.path} />
        }

        return (
            <div className='FormLogin'>
                <div><img className="logo" src="/images/logo.png" alt="logo da plataforma" /></div>
                <div className='transitionL'>
                    <button className='buttonLogin'>Login</button>
                    <button className='buttonCadastro'><Link to={'./register'} className='link'>Cadastro</Link></button>
                </div>
                <form className='formL'>
                    <input type='email'
                        placeholder='E-mail'
                        className="border-style"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })} />
                    <input type='password'
                        placeholder='Password'
                        className="border-style padding"
                        value={this.state.pass}
                        onChange={e => this.setState({ pass: e.target.value })} />
                    <button type='submit'
                        className='buttonE'
                        onClick={this.handleSubmit}>
                        Entrar</button>
                </form>
                <footer className='footerL'>Copyright © Scripta Inc.</footer>
            </div>
        )
    }
}
