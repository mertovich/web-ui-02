import React, { Component } from 'react'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import LogoIcon from '../../images/LogoIcon.svg'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{
                    paddingTop:'3%',
                    backgroundColor:'#191B1E'
                }}>
                    <Container>
                        <Navbar.Brand href="#home"><img src={LogoIcon} width='25' height='25'/> NOTED</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" style={{
                                marginLeft:'10%'
                                
                            }}>
                                <Nav.Link href="#features" style={{
                                    marginLeft:'5%',
                                    marginRight:'5%',
                                }}>Application</Nav.Link>
                                <Nav.Link href="#Futures" style={{
                                    marginLeft:'5%',
                                    marginRight:'5%',
                                }} >Futures</Nav.Link>
                                <Nav.Link href="#Pricing" style={{
                                    marginLeft:'5%',
                                    marginRight:'5%',
                                }} >Pricing</Nav.Link>
                                <Nav.Link href="#FAQ" style={{
                                    marginLeft:'5%',
                                    marginRight:'5%',
                                }} >FAQ</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"> <Button variant="outline-light" style={{
                                    borderRadius:'20px',
                                    paddingLeft:'20px',
                                    paddingRight:'20px',
                                }}>Log in</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
