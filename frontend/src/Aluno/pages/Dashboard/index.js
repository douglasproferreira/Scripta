import React, { Component } from 'react';

import './dashboard.css';
import Header from '../../../components/Header';
import Task from '../../components/Tasks';

export default class Dashboard extends Component {

    verificar = (tasks) => {
        if (tasks.length === 0) {
            return (
                <div className='recado-tasks'>
                    <img src='/images/notask.png' alt='icone de jóia' className='img-recado' />
                    <p className='recado-title'>Ainda não há tarefas para essa turma!</p>
                    <p className='recado-title'> Aguarde até que o seu professor publique uma tarefa :-)</p>
                    <span className='recado-space'></span>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        const classroom = this.props.location.state.classroom
        const tasks = this.props.location.state.classroom.tasks
        this.verificar(tasks)
        return (
            <div className='dashboard'>
                <Header />
                <div className='card-dashboard'>
                    <p className='info'>{classroom.nameClass}</p>
                    <p className='info'>Prof. {classroom.teacher.nome}</p>
                    <p className='info'>{classroom.description}</p>
                </div>
                <div>
                    <div className='container-taks'>
                        {this.verificar(tasks)}
                        {tasks.map(task => (<Task key={task._id} tasks={task} />))}
                    </div>
                    <div className='space-task'></div>
                </div>
                <footer className='dash-foot'>
                    <div className='footer-dash'>
                        <p>Copyright © Scripta Inc.</p>
                    </div>
                </footer>
            </div>
        )
    }
}