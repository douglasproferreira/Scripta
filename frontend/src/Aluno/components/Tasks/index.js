import React, { Component } from 'react';

import './tasks.css'

import { Link } from 'react-router-dom'

import Modal from '../../../components/Modal/'


export default class Task extends Component {

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

    render() {
        const { tasks } = this.props;
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalTaskBody'>
                        <p className='modal-title'>{tasks.title}</p>
                        <p className='modal-description'>Objetivo: {tasks.description}</p>
                        <hr className='hr-modal'></hr>
                        <p className='modal-production-feedback'>Ver Produção</p>
                        <div className='div-modal'>
                            <button className='modal-bProduction'>
                                <img src='/images/production.png' alt='icone de produção' className='img-production' />
                            </button>
                        </div>
                        <hr className='hr-modal'></hr>
                        <p className='modal-production-feedback'>Ver Feedback</p>
                        <div className='div-modal'>
                            <button className='modal-bProduction'>
                                <img src='/images/feedback-icon.png' alt='icone de feedback' className='img-feedback' />
                            </button>
                        </div>
                        <hr className='hr-modal'></hr>
                        <div className='button-p'>
                            <Link to={{
                                pathname: '/production',
                                state: this.props
                            }}>
                                <button onClick={this.escondeModal} className='modal-button-p'>Produzir</button>
                            </Link>
                        </div>
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
                    <button className='option-view' onClick={this.mostraModal}>
                        <img src='/images/duplo-direita.png' alt='To do Answer' className='img-view' />
                    </button>
                    {modal}
                </div>
            </div>
        );
    }
}