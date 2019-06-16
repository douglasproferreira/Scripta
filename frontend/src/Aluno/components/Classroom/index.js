import React, { Component } from 'react';

import './classroom.css'

import { Link } from 'react-router-dom'


export default class Classroom extends Component {

    render() {
        const { classroom } = this.props;
        return (
            <div className="classroom-card">
                <strong className='name-turma'>
                    <Link to={{
                        pathname: '/dashboardAluno',
                        state: this.props
                    }} className='link-class'>{classroom.nameClass}</Link>
                </strong>
                <h5 className='name-teacher'>
                    Prof. {classroom.teacher.nome} 
                </h5>
                <p className='description-class'>
                    {classroom.description}
                </p>
            </div>
        );
    }
}