import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer/'
import Modal from '../../../components/Modal/'
import Classrooms from '../../components/Classroom/'

import './classroom.css'


export default class Classroom extends Component {
    state = {
        classrooms: [],
        codigo: ''
    }

    componentDidMount() {
        this.load();
    }

    load = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/classroom/listUserAluno', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { this.setTurmas(data) })
            .catch(err => { console.log(err) })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.codigo)
        const token = await localStorage.getItem('token');
        fetch('http://localhost:3000/classroom/inClass', {
            method: 'POST',
            body: JSON.stringify({
                codigo: this.state.codigo
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })
        this.escondeModal();
    }

    handleInputChange = (e) => {
        this.setState({codigo: e.target.value})
    }

    setTurmas = (data) => {
        console.log(data.classroom)
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

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className='modalBody'>
                        <div className='modalText'>Participar da Turma</div>
                        <form className='formM' action='submit'>
                            <input type='text'
                                placeholder='Codigo da Turma'
                                className="border-style"
                                value={this.state.codigo}
                                onChange={this.handleInputChange} />
                            <div className='buttonM'>
                                <button onClick={this.handleSubmit} className='modalButton'>Entrar</button>
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