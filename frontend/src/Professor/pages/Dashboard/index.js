import React, { Component } from 'react';

import './dashboard.css';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal/';
import Task from '../../components/Tasks';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false, classrooms: [] };
        this.mostraModal = this.mostraModal.bind(this);
        this.escondeModal = this.escondeModal.bind(this);
    }

    mostraModal() {
        this.setState({ showModal: true });
    }

    escondeModal() {
        this.setState({ showModal: false });
    }

    verificar = (tasks) => {
        if (tasks.length === 0) {
            return (
                <div className='recado-tasks'>
                    <img src='/images/notask.png' alt='icone de jóia' className='img-recado' />
                    <p className='recado-title'>Ainda não há tarefas para essa turma!</p>
                    <p className='recado-title'>Publique uma tarefa para seus alunos, basta clicar em + :-)</p>
                    <span className='recado-space'></span>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        const classroom = this.props.location.state.classroom
        const tasks = classroom.tasks
        this.verificar(tasks)
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='modalText'>Editar Turma</div>
                        <form className='formM'>
                            <input type='text'
                                placeholder={classroom.nameClass}
                                className="border-style"
                                value={classroom.className} />
                            <input type='text'
                                placeholder={classroom.description}
                                className="border-style padding"
                                value={classroom.description} />
                            <div className='buttonM'>
                                <button onClick={this.escondeModal} className='modalButton'>Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;

        return (
            <div className='dashboard'>
                <Header />
                <div className='card-dashboard'>
                    <p className='info'>{classroom.nameClass}</p>
                    <p className='info'>Prof. {classroom.teacher.nome}</p>
                    <p className='info'>{classroom.description}</p>
                    <div className='button-codigo'>
                        <p className='info-codigo'>Código da Turma: {classroom.codigo}</p>
                        <button className='edit-button' onClick={this.mostraModal}><img src='/images/edit.svg' alt='edit-button'></img></button>
                        {modal}
                    </div>
                </div>
                <div className='container-taks-answer'>
                    <div className='container-taks'>
                        {this.verificar(tasks)}
                        {tasks.map(task => (<Task key={task._id} tasks={task} />))}
                    </div>
                    <div className='card-answer'>
                    </div>
                </div>
                <div className='card-tarefas'>
                    <p></p>
                </div>
                <button className="task-plus-button" onClick={this.mostraModal}><p className='plus'>+</p></button>
                <div className='space-task'></div>
                <footer className='dash-foot'>
                    <div className='footer-dash'>
                        <p>Copyright © Scripta Inc.</p>
                    </div>
                </footer>
            </div>
        )
    }
}