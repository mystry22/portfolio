import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6';



export default function Navigation() {


    return (

        <div>
            <Navbar expand="lg" className="menu">
                <Container>
                    <Navbar.Brand href="/"><img src='/assets/image/ebuka.png' style={{ width: 40, height: 40 }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid mr-auto">


                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/#About" style={{ color: '#A7A7A7', fontSize: 15, lineHeight:2.5, fontWeight:700 }}>About</Nav.Link>
                            <Nav.Link href="/#Tech Stack" style={{ color: '#A7A7A7', fontSize: 15, lineHeight:2.5, fontWeight:700 }}>Tech_Stack</Nav.Link>
                            <Nav.Link href="/#Projects" style={{ color: '#A7A7A7', fontSize: 15, lineHeight:2.5, fontWeight:700 }}>Projects</Nav.Link>
                            <Nav.Link href="/#Contact" style={{ color: '#A7A7A7', fontSize: 15, lineHeight:2.5, fontWeight:700 }}>Contact</Nav.Link>
                            <Nav.Link href="/#Work Experience" style={{ color: '#A7A7A7', fontSize: 15, lineHeight:2.5, fontWeight:700 }}>Experience</Nav.Link>
                            <Nav.Link href="https://github.com/mystry22" style={{ color: '#A7A7A7', fontSize: 20 }}><FaGithub style={{color:'#A7A7A7'}}/></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/ebuka-henry-alaneme/" style={{ color: '#A7A7A7', fontSize: 20 }}><FaLinkedin style={{color:'#A7A7A7'}} /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com/alanemehenry" style={{ color: '#A7A7A7', fontSize: 20 }}><FaXTwitter tyle={{color:'#A7A7A7'}} /></Nav.Link>

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

}

