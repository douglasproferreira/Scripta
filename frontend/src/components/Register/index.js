import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';

import './register.css'
import api from '../../services/api';


export default class Register extends Component {
    state = {
        typeUser: '',
        username: '',
        email: '',
        password: '',
        from: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { typeUser, username, email, pass } = this.state;

        if (typeUser === '' ||
            username === '' ||
            email === '' ||
            pass === '') return alert('Há campos obrigatórios em branco!');

        try {
            console.log(this.state.typeUser)
            await api.post('/user/register', {
                typeUser: this.state.typeUser,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            });

            alert("Cadastro Realizado com Sucesso");
            this.setState({ from: true });

        } catch (err) {
            alert("Cadastro Realizado com Sucesso");
            console.log(err)
        }
    }
    
    render() {
        if (this.state.from) {
            return <Redirect to='/home' />
        }
        return (
            <div className='FormRegister'>
                <div> <img className="logo" src="/images/logo.png" alt='Logo do sistema' /></div>
                <div className='transition'>
                    <button className='buttonL'><Link to={'./'} className='link'>Login</Link></button>
                    <button className='buttonC'>Cadastro</button>
                </div>
                <form className='form'>
                    <select className="select"
                        value={this.state.typeUser}
                        onChange={e => this.setState({ typeUser: e.target.value })}>
                        <option>Tipo de Usuário</option>
                        <option>Professor</option>
                        <option>Aluno</option>
                    </select>
                    <input type='text'
                        placeholder='Username'
                        className="border-style"
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })} />
                    <input type='email'
                        placeholder='E-mail'
                        className="border-style"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })} />
                    <input type='password'
                        placeholder='Password'
                        className="border-style padding"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })} />
                    <button type='submit' onClick={this.handleSubmit} className='buttonR'>Cadastrar</button>
                </form>
                <footer className='footerC'>Copyright © Scripta Inc.</footer>
            </div>
        )
    }
}