import React, { Component } from 'react'
import classnames from 'classnames';
import './styles.css'

export default class Selector extends Component {
    render() {
        return (
            <div className="selector-container">
                <div className="bg-overlay"/>
                <div className="dark-overlay"/>
                <a href="https://www.facebook.com/groups/UofTLA/" className={
                    classnames('selector', 'selector-lol', 'widther')
                }>
                    <p className="sub-title">League of Legends</p>
                </a>
                <a href="https://www.facebook.com/groups/UofTOW/" className={
                    classnames('selector', 'selector-ow', 'widther')
                }>
                    <p className="sub-title">Overwatch</p>
                </a>
                <a href="https://cs.uoftesports.club/" className={
                    classnames('selector', 'selector-cs', 'widther')
                }>
                    <p className="sub-title">Counter Strike</p>
                </a>
                <a href="https://www.facebook.com/groups/1775468526001623/" className={
                    classnames('selector', 'selector-smash', 'widther')
                }>
                    <p className="sub-title">Smash Bros.</p>
                </a>
                <a href="https://www.facebook.com/groups/uoftstreetfighter/" className={
                    classnames('selector', 'selector-sf', 'widther')
                }>
                    <p className="sub-title">Street Fighter</p>
                </a>
                <a href="https://www.facebook.com/groups/UTHearthstone/" className={
                    classnames('selector', 'selector-hearthstone', 'widther')
                }>
                    <p className="sub-title">Hearthstone</p>
                </a>
            </div>
        )
    }
}