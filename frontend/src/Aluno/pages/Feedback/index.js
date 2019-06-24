import React, { Component } from 'react';

import './feedback.css';
import Header from '../../../components/Header';

export default class Feedback extends Component {

    state = {
        parecer: '',
        nota: ''
    }

    componentDidMount() {
        this.buscarFeedback();
    }

    buscarFeedback = async () => {
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/feedback/buscarFeedback', {
            method: 'POST',
            body: JSON.stringify({
                _id: this.props.location.state.feedback
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
        console.log(data.feedback)
        this.setState({ parecer: data.feedback.parecer, nota: data.feedback.nota })
    }

    render() {
        console.log(this.props.location)
        return (
            <div className='answer-aluno'>
                <Header />
                <div className='row'>
                    <div className='card-answer'>
                        <details open>
                            <summary className='button-answer'>
                                Feedback
                            </summary>
                            <h3 className='introducao-answer'>Parecer</h3>
                            <div className='production-introduction'>
                                <p>{this.state.parecer}</p>
                            </div>
                            <h3 className='introducao-answer'>Nota</h3>
                            <div className='production-introduction'>
                                <p>{this.state.nota}</p>
                            </div>
                        </details>
                    </div>
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