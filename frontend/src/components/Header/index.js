import React, { Component } from 'react'

import './header.css'



export default class Header extends Component {

    renderMenu = () => {
        return (
            <div className='menu'>
                <img src='/images/user.png' alt='icone de usuário' />
                <p>Usuário</p>
                <div className='options'>
                    <p>Turmas</p>
                    <p>Materiais</p>
                    <p>Log off</p>
                </div>
            </div>
        )
    }

    verificar = () => {
        console.log('Aqui')
    }

    render() {
        return (
            <header >
                <div className='header'>
                    <h1 className='title'>Scripta</h1>
                    <div className='column'>
                        <button className="menu" onClick={this.verificar}></button>
                        <button className="menu" onClick={this.verificar}></button>
                        <button className="menu" onClick={this.verificar}></button>
                    </div>
                </div>
            </header>
        )
    }
}