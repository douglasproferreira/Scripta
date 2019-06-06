import React, {Component} from 'react';

import Modal from '../../components/Modal'

export default class ModalC extends Component {
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
        const { classrooms } = this.state;
        console.log(classrooms)
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
            <div>
                <button className="plus-button" onClick={this.mostraModal}><p className='plus'>+</p></button>
                {modal}
            </div>
        )
    }
}