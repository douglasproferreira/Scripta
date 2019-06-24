import React, { Component } from 'react';

import './entregas.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Answer from '../../components/Answer/'

export default class Entregas extends Component {

    verificar = (answer) => {
        if (answer.length === 0) {
            return (
                <div className='recado-answer'>
                    <img src='/images/icon-answer.png' alt='icone de jóia' className='img-answer' />
                    <p className='recado-title'>Ainda não há entregas para esta tarefa!</p>
                    <span className='answer-space'></span>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        console.log(this.props)
        const { tasks } = this.props.location.state
        console.log(tasks)
        console.log(tasks.answer)
        return (
            <div>
                <Header />
                <div className='answer-container'>
                    <div className='card-dashboard'>
                        <h1 className='info-answer'>{tasks.title}</h1>
                        <h2 className='info-answer'>Mural de Entregas</h2>
                    </div>
                    <div className='answer-entregas'>
                        <h3 className='answer-at-title'> Atividades Entregues</h3>
                        <h4 className='answer-at-title-sec'> Clique na entrega e avalie!</h4>
                        {this.verificar(tasks.answer)}
                        {tasks.answer.map(answer => (<Answer key={answer._id} answer={answer}/>))}</div>
                        <div className='space'></div>
                    </div>
                <Footer />
            </div>
        )
    }
}