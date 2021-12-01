import React, { Component } from 'react'
import NavBar from './Component/NavBar'
import './CSS/Home.css'
import OneSection from './Component/OneSection'
import TwoSection from './Component/TwoSection'

export default class Home extends Component {
    render() {
        return (
            <div className='Test'>
                <NavBar/>
                <OneSection/>
                <TwoSection/>
            </div>
        )
    }
}
