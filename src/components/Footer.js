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
                        <a className="sponsor-click" target="_blank" href="https://levelupreality.ca/">
                            <img className="sponsor-img" src={require('./images/sponsor1.png')}/>
                        </a>
                    </div>
                </div>
                <p className="footer-text">designed by jacob erickson in 2017</p>
            </div>
        )
    }
}