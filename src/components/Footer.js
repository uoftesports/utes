import React, { Component } from 'react'
import Social from './Social'
import './styles.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-subcontainer">
                    <Social />
                    <p className="footer-text">sponsored by</p>
                    <div className="sponsors">
                        <a className="sponsor-click" rel="noopener noreferrer" target="_blank" href="https://levelupreality.ca/">
                            <img alt="Levelup Reality" className="sponsor-img" src={require('./images/sponsor1.png')}/>
                        </a>
                    </div>
                </div>
                <a href="https://jaruserickson.com" rel="noopener noreferrer" target="_blank" className="footer-button"><p className="footer-text">designed by jacob erickson in 2017</p></a>
            </div>
        )
    }
}