import React, { Component } from 'react';

import './classroom.css'

// import { Link } from 'react-router-dom'


export default class Classroom extends Component {

    render() {
        const { classroom } = this.props;

        return (
                <div className="classroom-card">
                    <strong className='name-turma'>
                        {classroom.nameClass}
                    </strong>
                    <h5 className='name-teacher'>
                       Prof. {classroom.user.username} 
                    </h5>
                    <p className='description-class'>
                        {classroom.description}
                    </p>
                    <button className='button-class'>Acessar</button>
                </div>
        );
    }
}