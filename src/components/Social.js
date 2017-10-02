import React, { Component } from 'react'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaTwitch,
} from 'react-icons/lib/fa'
import './styles.css'

export default class Social extends Component {
    render() {
        return (
            <div className="social-container">
                <a className="icon" href={"https://twitch.tv/uoftesports"} target="_blank">
                    <span> <FaTwitch color={'white'} size={24}/> </span>
                </a>
                <a className="icon" href={"https://facebook.com/uoftesports"} target="_blank">
                    <span> <FaFacebook color={'white'} size={24}/> </span>
                </a>
                <a className="icon" href={"https://twitter.com/uoftesports"} target="_blank">
                    <span> <FaTwitter color={'white'} size={24}/> </span>
                </a>
                <a className="icon" href={"https://instagram.com/uoftesports"} target="_blank">
                    <span> <FaInstagram color={'white'} size={24}/> </span>
                </a>
                
            </div>
        )
    }
}