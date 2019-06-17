import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer/'
import Modal from '../../../components/Modal/'
import Classrooms from '../../components/Classroom/'

import './class.css'


export default class Classroom extends Component {
    state = {
        classrooms: [],
        name: '',
        description: ''
    }

    componentDidMount() {
        this.load();
    }

    load = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/classroom/listUser', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setTurmas(data) })
            .catch(err => { console.log(err) })
    }

    setTurmas = (data) => {
        this.setState({ classrooms: data.classroom })
        console.log(this.state.classrooms)
    }

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

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.codigo)
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/classroom/create', {
            method: 'POST',
            body: JSON.stringify({
                nameClass: this.state.name,
                description: this.state.description
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
        console.log(data);
        alert('Turma cadastrada com sucesso!')
        this.escondeModal();
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='modalText'>Criar Turma</div>
                        <form className='formM'>
                            <input type='text'
                                name='fwd'
                                placeholder='Descrição da Turma'
                                className="border-style"
                                value={this.state.description}
                                onChange={e => this.setState({ description: e.target.value })} />
                            <input type='text'
                                name='name'
                                placeholder='Nome da Turma'
                                className="border-style padding"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} />
                            <div className='buttonM'>
                                <button onClick={this.handleSubmit} className='modalButton'>Criar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;
        return (
            <div className='home'>
                <Header />
                <div className='container'>
                    <div className='turmas'>
                        <img src='/images/turmas.png' alt='background-card' className='imgTurma' />
                        <h2 className='textTurma'>Turmas</h2>
                    </div>
                    <button className="plus-button" onClick={this.mostraModal}><p className='plus'>+</p></button>
                    {modal}
                    <div className='card-turmas'>{this.state.classrooms.map(classroom => (<Classrooms key={classroom._id} classroom={classroom} />))}</div>
                    <div className='space'></div>
                </div>
                <Footer />
            </div>
        )
    }
}