import React, { Component } from 'react';

import './dashboard.css';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal/';
import Task from '../../components/Tasks';

export default class Dashboard extends Component {

    state = {
        title: '',
        descriptionC: '',
        descriptionE: '',
        nameClass: ''
    }

    constructor(props) {
        super(props);
        this.state = { showModalC: false, showModalE: false, classrooms: [] };
        this.mostraModalC = this.mostraModalC.bind(this);
        this.escondeModalC = this.escondeModalC.bind(this);
        this.mostraModalE = this.mostraModalE.bind(this);
        this.escondeModalE = this.escondeModalE.bind(this);
    }

    mostraModalC() {
        this.setState({ showModalC: true });
    }

    escondeModalC() {
        this.setState({ showModalC: false });
    }

    mostraModalE() {
        this.setState({ showModalE: true });
    }

    escondeModalE() {
        this.setState({ showModalE: false });
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

    editarTurma = async (e) => {
        console.log(this.state)
        e.preventDefault();
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/classroom/update', {
            method: 'PUT',
            body: JSON.stringify({
                classId: this.props.location.state.classroom._id,
                nameClass: this.state.nameClass,
                description: this.state.descriptionE
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.nextE(data) })
            .catch(err => { console.log(err) })
    }

    nextE = (data) => {
        console.log(data)
        alert('Alterado com sucesso!')
        this.escondeModalE();
    }

    criarTarefa = async (e) => {
        e.preventDefault();
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/task/createTask', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.descriptionC,
                classroom: this.props.location.state.classroom
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.nextC(data) })
            .catch(err => { console.log(err) })
    }

    nextC = (data) => {
        console.log(data)
        alert('Tarefa criada com sucesso')
        this.escondeModalC()
    }


    render() {
        const classroom = this.props.location.state.classroom
        const tasks = classroom.tasks
        this.verificar(tasks)
        const modalE = this.state.showModalE ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='span-modal'>
                            <button className='span-modal-text'
                                onClick={this.escondeModalE}>X</button>
                        </div>
                        <div className='modalText'>Editar Turma</div>
                        <form className='formM'>
                            <input type='text'
                                placeholder={classroom.nameClass}
                                className="border-style"
                                value={this.state.nameClass}
                                onChange={e => this.setState({ nameClass: e.target.value })} />
                            <input type='text'
                                placeholder={classroom.description}
                                className="border-style padding"
                                value={this.state.descriptionE}
                                onChange={e => this.setState({ descriptionE: e.target.value })} />
                            <div className='buttonM'>
                                <button onClick={this.editarTurma} className='modalButton'>Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;

        const modalC = this.state.showModalC ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                    <div className='span-modal'>
                            <button className='span-modal-text'
                                onClick={this.escondeModalC}>X</button>
                        </div>
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
            <div className='dashboard'>
                <Header />
                <div className='card-dashboard'>
                    <p className='info'>{classroom.nameClass}</p>
                    <p className='info'>Prof. {classroom.teacher.nome}</p>
                    <p className='info'>{classroom.description}</p>
                    <div className='button-codigo'>
                        <p className='info-codigo'>Código da Turma: {classroom.codigo}</p>
                        <button className='edit-button' onClick={this.mostraModalE}><img src='/images/edit.svg' alt='edit-button'></img></button>
                        {modalE}
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
                <button className="task-plus-button" onClick={this.mostraModalC}><p className='plus'>+</p></button>
                {modalC}
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