import React, { Component } from 'react'
import Header from './components/Header'
import Selector from './components/Selector'
import Staff from './components/Staff'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Selector />
                <Staff />
                <Footer />
            </div>
        )
    }
}

export default App
