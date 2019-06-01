import React, { Component } from 'react'


import HeaderA from '../../components/Header/'
import Footer from '../../components/Footer/'

import {Modal} from 'react-bootstrap/Modal'
import {Header} from 'react-bootstrap/ModalHeader'
import {Button} from 'react-bootstrap/Button'
import {ButtonToolbar} from 'react-bootstrap/ButtonToolbar'

import './home.css'


export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            smShow: false,
            lgShow: false,
        };
    }
    render() {
        let smClose = () => this.setState({ smShow: false });
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <div className='home'>
                <HeaderA />
                <div className='filter'>
                    <div className='mensagem'>
                        <p className='text c'>Bem  Vindo!</p>
                        <p className='text'>Crie  sua  primeira  turma...</p>
                        <ButtonToolbar>
        <Button onClick={() => this.setState({ smShow: true })}>
          Small modal
        </Button>
        <Button onClick={() => this.setState({ lgShow: true })}>
          Large modal
        </Button>

        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={smClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={lgClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </ButtonToolbar>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}