import React, { Component } from 'react';

import './entregas.css';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal/';
import Task from '../../components/Tasks';
import Answer from '../../components/Answer/'

export default class Entregas extends Component {

    state = {
        
    }

    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.mostraModal = this.mostraModal.bind(this);
        this.escondeModal = this.escondeModal.bind(this);
    }

    mostraModal() {
        this.setState({ showModal: true });
    }

    escondeModal() {
        this.setState({ showModal: false });
    }

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
        console.log(tasks.answer)
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='modalText'>Criar Tarefa</div>
                        <form className='formM'>
                            <input type='text'
                                placeholder='Digite o titúlo da tarefa'
                                className="border-style"
                                value={this.state.title}
                                onChange={e => this.setState({ title: e.target.value })} />
                            <input type='text'
                                placeholder='Digite a descrição da tarefa'
                                className="border-style padding"
                                value={this.state.descriptionC}
                                onChange={e => this.setState({ descriptionC: e.target.value })} />
                            <div className='buttonM'>
                                <button onClick={this.criarTarefa} className='modalButton'>Criar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;

        return (
            <div>
                <Header />
            <h1>Olá</h1>
            {this.verificar(tasks.answer)}
            {tasks.answer.map(answer => (<Answer key={answer._id} answer={answer} />))}
        </div>
        )
    }
}