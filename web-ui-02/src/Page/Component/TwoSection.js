import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import MicrosoftIcon from '../../images/MicrosoftIcon.svg'

export default class TwoSection extends Component {
    render() {
        return (
            <div>
                <Row xs='1' md='5' style={{
                    color: 'grey',
                    marginTop: '5%',
                    marginRight: '5%',
                    marginLeft: '5%',
                }}>
                    <Container className='text-center'>
                        <h2> WE ARE TRUESED</h2>
                    </Container>
                    <Container className='text-center'><h2> | </h2></Container>
                    <Container className='text-center'> <img src={MicrosoftIcon} style={{
                        width: '55%',
                    }} /></Container>
                    <Container className='text-center'><h2> Google</h2></Container>
                    <Container className='text-center'> <h2> Uber</h2></Container>
                </Row>
            </div>
        )
    }
}
