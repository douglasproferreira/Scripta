import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom';

import './register.css'
import api from '../../services/api';


export default class Register extends Component {
    state = {
        typeUser: '',
        nome: '',
        email: '',
        password: '',
        from: false,
        path: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { typeUser, nome, email, pass } = this.state;

        if (typeUser === '' ||
            nome === '' ||
            email === '' ||
            pass === '') return alert('Há campos obrigatórios em branco!');

        try {
            console.log(this.state.typeUser)
            const response = await api.post('/user/register', {
                typeUser: this.state.typeUser,
                nome: this.state.nome,
                email: this.state.email,
                password: this.state.password
            });

            console.log(response);

            if(this.state.typeUser === 'Professor'){
                this.setState({path: '/home'})
            } else if(this.state.typeUser === 'Aluno'){
                this.setState({path: '/homeAluno'})
            }

            alert("Cadastro Realizado com Sucesso");
            this.setState({ from: true });

        } catch (err) {
            alert("Erro no Cadastro");
            console.log(err)
        }
    }
    
    render() {
        if (this.state.from) {
            return <Redirect to={this.state.path} />
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
                        placeholder='Nome'
                        className="border-style"
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })} />
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