import React, { Component } from 'react';

import './view.css';
import Header from '../../../components/Header';

export default class PreductionView extends Component {

    state = {

    }

    render() {
        console.log(this.props.location)
        return (
            <div className='answer-aluno'>
                <Header />
                <div className='row'>
                    <div className='card-answer'>
                        <details open className='card-answer'>
                            <summary className='button-answer'>
                                Minha Produção 
                            </summary>
                            <h3 className='introducao-answer'>Introdução</h3>
                                    <div className='production-introduction'>
                                        <p>{this.props.location.state.introducao}</p>
                                    </div>

                                    <h3>Desenvolvimento</h3>
                                    <div className='production-introduction'>
                                        <p>{this.props.location.state.desenvolvimento}</p>
                                    </div>

                                    <h3>Resultados</h3>
                                    <div className='production-introduction'>
                                        <p>{this.props.location.state.resultados}</p>
                                    </div>

                                    <h3>Recomendações</h3>
                                    <div className='production-introduction'>
                                        <p>{this.props.location.state.recomendacoes}</p>
                                    </div>

                                    <h3>Referências</h3>
                                    <div className='production-introduction'>
                                        <p>{this.props.location.state.referencias}</p>
                                    </div>
                        </details>
                        <div className='space'></div>
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