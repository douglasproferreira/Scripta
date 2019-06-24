import React, { Component } from 'react';

import './answer.css';

import Modal from '../../../components/Modal/';

export default class Answer extends Component {

    state = {
        answer: {},
        user: {},
        info: {},
        show: false,
        parecer: '',
        nota: '',
        from: false
    }

    componentDidMount() {
        this.buscarAnswer();
    }

    constructor(props) {
        super(props);
        this.state = { showModal: false, answer: {}, user: {} };
        this.mostraModal = this.mostraModal.bind(this);
        this.escondeModal = this.escondeModal.bind(this);
    }

    mostraModal() {
        this.setState({ showModal: true });
    }

    escondeModal() {
        this.setState({ showModal: false });
    }

    buscarAnswer = async () => {
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/taskAnswer/answerShow', {
            method: 'POST',
            body: JSON.stringify({
                answer: this.props.answer
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setState({ answer: data, user: data.user }) })
            .catch(err => { console.log(err) })
    }

    entrega = () => {
        this.setState({
            show: true
        })
    }

    criarFeedback = async () => {
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/feedback/createFeedback', {
            method: 'POST',
            body: JSON.stringify({
                nota: this.state.nota,
                parecer: this.state.parecer,
                taskAnswer: this.state.answer._id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })
            alert('Feedback enviado com sucesso!')
            this.escondeModal()
    }

    render() {
        console.log(this.state.user.nome)
        console.log(this.state.info)

        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='span-modal'>
                            <button className='span-modal-text'
                                onClick={this.escondeModal}>X</button>
                        </div>
                        <div className='modalText'>Enviar Feedback</div>
                        <form className='formM'>
                            <input type='text'
                                placeholder='Digite o parecer da tarefa'
                                className="border-style"
                                value={this.state.parecer}
                                onChange={e => this.setState({ parecer: e.target.value })} />
                            <input type='text'
                                placeholder='Digite a nota da tarefa'
                                className="border-style padding"
                                value={this.state.nota}
                                onChange={e => this.setState({ nota: e.target.value })} />
                            <div className='buttonM'>
                                <button onClick={this.criarFeedback} className='modalButton'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;
        return (
            <div className='answer-aluno'>
                <div className='row-as'>
                    <div className='card-answer'>
                        <details open>
                            <summary className='button-answer'>
                                Aluno: {this.state.user.nome}
                            </summary>
                            <div className='res'>
                                <div className="answer-resposta">

                                    <h3 className='introducao-answer'>Introdução</h3>
                                    <div className='production-introduction'>
                                        <p>{this.state.answer.introducao}</p>
                                    </div>

                                    <h3>Desenvolvimento</h3>
                                    <div className='production-introduction'>
                                        <p>{this.state.answer.desenvolvimento}</p>
                                    </div>

                                    <h3>Resultados</h3>
                                    <div className='production-introduction'>
                                        <p>{this.state.answer.resultados}</p>
                                    </div>

                                    <h3>Recomendações</h3>
                                    <div className='production-introduction'>
                                        <p>{this.state.answer.recomendacoes}</p>
                                    </div>

                                    <h3>Referências</h3>
                                    <div className='production-introduction'>
                                        <p>{this.state.answer.referencias}</p>
                                    </div>
                                    <button className='button-as' onClick={this.mostraModal}>Enviar Feedback</button>
                                    {modal}
                                    <div className='space'></div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        )
    }
}