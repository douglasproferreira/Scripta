import React, { Component } from 'react'

import '../index.css'

import Cadastro from '../../components/Register/'

export default class Register extends Component {

    render() {
        return (
            <div className='body'>
                <Cadastro />
                <div className='filter'>
                    <p className='text b'>Quase lá!</p>
                    <p className='text t'>Basta preencher os campos</p>
                    <p className='text t'>e podemos continuar...</p>
                </div>

            </div>
        )
    }
}