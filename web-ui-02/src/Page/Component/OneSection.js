import React, { Component } from 'react'
import { Row, Container, Button } from 'reactstrap'
import ImageOne from '../../images/ImageOne.svg'
import ImageTwo from '../../images/ImageTwo.svg'

export default class OneSection extends Component {
    render() {
        return (
            <div>
                <Row xs='1' md='2'>
                    <Container variant='Top'>
                       <Container style={{
                           color:'white',
                           paddingTop:'10%',
                           paddingLeft:'30%',
                           paddingRight:'20%',
                       }}>
                       <p style={{
                           color:'grey',
                       }}>1 month free trial</p>
                        <h1 style={{
                            fontSize:'3rem',
                        }}>Take Notes anytime and share them with your Colleaues</h1>
                        <p style={{
                           color:'grey'
                       }}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                       </Container>

                        <Row xs='1' md='2'style={{
                            marginTop:'10%',
                           color:'white',
                           paddingTop:'30px',
                           paddingLeft:'30%',
                           paddingRight:'20%',
                       }}>
                            <Container>
                                <Button color="primary" style={{
                                    borderRadius: '20px',
                                    color:'white',
                                    addingRight:'20px',
                                    paddingLeft:'20px',
                                    marginBottom:'5%'
                                }}>Create Account</Button>
                            </Container>

                            <Container>
                                <Button  style={{
                                    borderRadius: '20px',
                                    color:'white',
                                }}> <img src={ImageTwo} width='25px' height='25px'/> Download Application</Button>
                            </Container>

                        </Row>
                    </Container>
                    <Container variant='Top'>
                        <img src={ImageOne} width='100%' style={{
                            marginTop: '10%'
                        }} />
                    </Container>
                </Row>
            </div>
        )
    }
}
