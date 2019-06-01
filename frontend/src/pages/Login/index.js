import React, { Component } from 'react';

import '../index.css'

import FormLogin from '../../components/Login/'

export default class Login extends Component {

    render() {
        return (
            <div className='body'>
                <FormLogin />
                <div className='filter'>
                    <p className='text b'>Junte-se a nós!</p>
                    <p className='text t'>Faça seu login ou cadastre-se</p>
                    <p className='text t'>e inicie seus trabalhos!</p>
                </div>
            </div>
        )
    }
}