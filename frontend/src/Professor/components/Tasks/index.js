import React, { Component } from 'react';

import './tasks.css'

// import { Link } from 'react-router-dom'


export default class Task extends Component {

    render() {
        const { tasks } = this.props;

        return (
            <div className='card-task'>
                <strong className='task-title'>
                    {tasks.title}
                </strong>
                <h5 className='task-description'>
                    {tasks.description}
                </h5>
                <div className='task-options'>
                    <button className='option-edit'><img src='/images/edit.svg' alt='Edit task' /></button>
                    <button className='option-view'>
                        <img src='/images/duplo-direita.png' alt='View Task Answer' className='img-view' />
                    </button>
                </div>
            </div>
        );
    }
}