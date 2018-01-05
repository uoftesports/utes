import React, { Component } from 'react'
import Modal, { closeStyle } from 'simple-react-modal'
import Social from './Social'
import './styles.css'

export default class Footer extends Component {
    state = {
        show: false
    }
    render() {
        //modal
        return (
            <div className="footer-container">
                <Modal show={this.state.show} containerStyle={{backgroundColor: 'rgba(0,0,0,0.8)', textAlign: 'left', width: '60%'}} onClose={() => this.setState({show: false})} transitionSpeed={1000}>
                    <div style={{color: 'white'}}>
                        <a href={"https://levelupreality.ca"} style={{textDecoration: 'none'}}><h1 style={{color: 'white'}}>Levelup Reality</h1></a>
                        <p>
                            Levelup Reality takes you beyond the limits of reality into a rich immersive experience where<br/>
                            you can connect with others while engaging all of your senses. Offering virtual reality in Toronto,<br/>
                            we have many single and multiplayer experiences in a variety of genres such as adventure,<br/>
                            shooters, action, escape rooms, short films, etc.  This entertainment is well-suited to be enjoyed<br/>
                            solo, with friends, families, groups, or parties. Come level up your reality today!<br/>
                        </p>
                        <b>Here are some of the many experiences you can get immersed in at Levelup Reality:</b>
                        <p>
                            - Become a soldier: Duck behind cover, alternate between ballistic weapons, and fend off
                            enemies.<br/>
                            - Survive a zombie apocalypse: Team up in multiplayer with friends, and protect each other
                            from the incoming hordes.<br/>
                            - Explore the deep sea: Dive into the ocean and interact with exotic aquatic creatures.<br/>
                            - And many more genres such as adventure, action, escape rooms, short films, etc…<br/>
                        </p>
                    </div>
                    <a style={closeStyle} onClick={() => this.setState({show: false})}>X</a>
                </Modal>
                <div className="footer-subcontainer">
                    <Social />
                    <p className="footer-text">sponsored by</p>
                    <div className="sponsors">
                        <a className="sponsor-click" rel="noopener noreferrer" target="_blank" onClick={() => this.setState({show: true})}>
                            <img alt="Levelup Reality" className="sponsor-img" src={require('./images/sponsor1.png')}/>
                        </a>
                        <a className="sponsor-click" rel="noopener noreferrer" target="_blank" href={'http://www.vitasoy.com/'}>
                            <img alt="vitasoy" className="sponsor-img smaller-img" src={require('./images/vitasoy.png')}/>
                        </a>
                    </div>
                </div>
                <a href="https://jaruserickson.com" rel="noopener noreferrer" target="_blank" className="footer-button"><p className="footer-text">designed by jacob erickson in 2017</p></a>
            </div>
        )
    }
}