import React, { Component } from 'react';

import './tasks.css'

import { Link } from 'react-router-dom'
import Modal from '../../../components/Modal/'

export default class Task extends Component {

    state = {
        title: '',
        description: ''
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

    editarTarefa = async (e) => {
        e.preventDefault();
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/task/editTask', {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                classroom: this.props.classroom
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.next(data) })
            .catch(err => { console.log(err) })
    }

    next = (data) => {
        console.log(data)
        alert('Tarefa alterada com sucesso!')
        this.escondeModal()
    }

    render() {
        const { tasks } = this.props;
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='span-modal'>
                            <button className='span-modal-text'
                                onClick={this.escondeModal}>X</button>
                        </div>
                        <div className='modalText'>Editar Tarefa</div>
                        <form className='formM'>
                            <input type='text'
                                placeholder={tasks.title}
                                className="border-style"
                                value={this.state.title}
                                onChange={e => this.setState({ title: e.target.value })} />
                            <input type='text'
                                placeholder={tasks.description}
                                className="border-style padding"
                                value={this.state.description}
                                onChange={e => this.setState({ description: e.target.value })} />
                            <div className='buttonM'>
                                <button onClick={this.editarTarefa} className='modalButton'>Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;

        return (
            <div className='card-task'>
                <strong className='task-title'>
                    {tasks.title}
                </strong>
                <h5 className='task-description'>
                    {tasks.description}
                </h5>
                <div className='task-options'>
                    <button className='option-edit'
                        onClick={this.mostraModal}><img src='/images/edit.svg' alt='Edit task' /></button>
                    {modal}
                    <Link to={{
                        pathname: '/entregas',
                        state: this.props
                    }}>
                        <button className='option-view'>
                            <img src='/images/duplo-direita.png' alt='View Task Answer' className='img-view' />
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}