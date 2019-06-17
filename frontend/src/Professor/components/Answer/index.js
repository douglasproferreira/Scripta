import React, { Component } from 'react';

import './answer.css';
import Header from '../../../components/Header';
// import Modal from '../../../components/Modal/';

export default class Answer extends Component {

    state = {
        answer: {},
        user: {}
    }

    componentDidMount() {
        this.buscarAnswer()
    }

    buscarAnswer = async () => {
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/taskAnswer/answerShow', {
            method: 'POST',
            body: JSON.stringify({
                answer: this.props.answer
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setState({ answer: data, user: data.user }) })
            .catch(err => { console.log(err) })
    }

    entrega = () => {
        return (
            <div className='retorno'>
                <h1>Introdução</h1>
                <p>{this.state.answer.introducao}</p>
            </div>
        )
    }

    render() {
        console.log(this.state.user.nome)
        return (
            <div>
                <h1>{this.state.user.nome}</h1>
                <div className='retorno'>
                    <button onclick={this.entrega}>
                        Ver entrega
            </button>
                </div>
            </div>
        )
    }
}