import React, { Component } from 'react'


import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import Modal from '../../components/Modal/'

import './home.css'


export default class Home extends Component {
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
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className='modalBody'>
            <div className='modalText'>Criar Turma</div>
            <form className='formM'>
              <input type='text' name='fwd' placeholder='Assunto' className="border-style" />
              <input type='text' name='name' placeholder='Nome da Turma' className="border-style padding" />
              <div className='buttonM'>
                <button onClick={this.escondeModal} className='modalButton'>Criar</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    ) : null;
    return (
      <div className='home'>
        <Header />
        <div className='mensagem'>
          <p className='text c'>Bem  Vindo!</p>
          <p className='text'>Crie  sua  primeira  turma...</p>
          <div className='buttonH'>
            <button onClick={this.mostraModal} className='botaoH'>Criar</button>
            {modal}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}