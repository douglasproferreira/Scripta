import React, { Component } from 'react'
import Header from '../../../components/Header'

import {Redirect} from 'react-router-dom'

import './production.css'


export default class Production extends Component {

    state = {
        introducao: '',
        desenvolvimento: '',
        resultados: '',
        recomendacoes: '',
        referencias: '',
    }

    enviar = async () => {
        const token = await localStorage.getItem('token')
        fetch('http://localhost:3000/taskAnswer/createTaskAnswer', {
            method: 'POST',
            body: JSON.stringify({
                task: this.props.location.state.tasks._id,
                introducao: this.state.introducao,
                desenvolvimento: this.state.desenvolvimento,
                resultados: this.state.resultados,
                recomendacoes: this.state.recomendacoes,
                referencias: this.state.referencias,
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
        console.log(data)
        alert('Enviado com sucesso')
        this.setState({from: true})
    }

    render() {
        if(this.state.from)
        return <Redirect to={{
            pathname: '/classAluno'
        }}/>
        return (
            <div className='home'>
                <Header />
                <div className='production-container'>
                    <div className='production'>
                        <h1 className='production-title'>Área de Produção</h1>
                        <h2 className='production-title-sec'>Realize aqui sua produção, conforme solicita seu professor!</h2>
                    </div>
                    <div className='right'>
                    <h3 className='production-introduction'>Introdução</h3>
                    <div className='introduction'>
                        <blockquote className='blockquote'>
                            <h5 className='blockquote-text'>"Como fazer uma boa Introdução?"</h5>
                        </blockquote>
                        <p className='text-prod'> -> Apresente o assunto como um todo de forma sucinta;</p>
                        <p className='text-prod'> -> Utilize linguagem clara e objetiva;</p>
                        <p className='text-prod'> -> Seja coerente e conciso.</p>
                        <textarea className='text-area'
                            placeholder='Escreva aqui sua Introdução...'
                            value={this.state.introducao}
                            onChange={e => this.setState({ introducao: e.target.value })} />
                    </div>
                    <h3 className='production-introduction'>Desenvolvimento</h3>
                    <div className='introduction'>
                        <blockquote className='blockquote'>
                            <h5 className='blockquote-text'>"Como fazer um bom Desenvolvimento?"</h5>
                        </blockquote>
                        <p className='text-prod'> -> Apresente o assunto como um todo de forma sucinta;</p>
                        <p className='text-prod'> -> Utilize linguagem clara e objetiva;</p>
                        <p className='text-prod'> -> Seja coerente e conciso.</p>
                        <textarea className='text-area-des'
                            placeholder='Apresente o forma como desenvolveu o projeto...'
                            value={this.state.desenvolvimento}
                            onChange={e => this.setState({ desenvolvimento: e.target.value })} />
                    </div>
                    <h3 className='production-introduction'>Resultados</h3>
                    <div className='introduction'>
                        <blockquote className='blockquote'>
                            <h5 className='blockquote-text'>"Como apresentar meus resultados?"</h5>
                        </blockquote>
                        <p className='text-prod'> -> Apresente em ordem cronológica;</p>
                        <p className='text-prod'> -> Justifique a metodologia utilizada;</p>
                        <p className='text-prod'> -> Não se preocupe com erros em testes.</p>
                        <textarea className='text-area-res'
                            placeholder='Apresente aqui seus resultados...'
                            value={this.state.resultados}
                            onChange={e => this.setState({ resultados: e.target.value })} />
                    </div>

                    <h3 className='production-introduction'>Recomendações</h3>
                    <div className='introduction'>
                        <blockquote className='blockquote'>
                            <h5 className='blockquote-text'>"O que pode melhorar?"</h5>
                        </blockquote>
                        <p className='text-prod'> -> Apresente futuras melhoras no seu trabalho.</p>
                        <textarea className='text-area-rec'
                            placeholder='Apresente aqui suas recomendações...'
                            value={this.state.recomendacoes}
                            onChange={e => this.setState({ recomendacoes: e.target.value })} />
                    </div>

                    <h3 className='production-introduction'>Referências</h3>
                    <div className='introduction'>
                        <blockquote className='blockquote'>
                            <h5 className='blockquote-text'>"Como apresentar minhas referências?"</h5>
                        </blockquote>
                        <p className='text-prod'> -> Utilize as normas da ABNT ;-)</p>
                        <textarea className='text-area-ref'
                            placeholder='Apresente aqui suas referências...'
                            value={this.state.referencias}
                            onChange={e => this.setState({ referencias: e.target.value })} />
                    </div>

                    <div className='button-production'>
                        <button onClick={this.enviar} className='button-production-c'>Enviar</button>
                    </div>
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