import React, { Component } from 'react'
import './styles.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="bg-image" />
                <img alt="" className="logo-image" src={require('./utesbw.png')}/>
            </div>
        )
    }
}