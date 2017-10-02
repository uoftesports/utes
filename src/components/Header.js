import React, { Component } from 'react'
import './styles.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="bg-image" />
                <p className="title">UOFT ESPORTS</p>
                <img className="logo-image" src={require('./utes.png')}/>
            </div>
        )
    }
}