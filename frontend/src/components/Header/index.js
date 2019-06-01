import React, { Component } from 'react'

import './header.css'



export default class Header extends Component {
    render() {
        return (
            <header >
                <div className='header'>
                    <h1 className='title'>Scripta</h1>
                    <div className='column'>
                        <div className="menu"></div>
                        <div className="menu"></div>
                        <div className="menu"></div>
                    </div>
                </div>
            </header>
        )
    }
}