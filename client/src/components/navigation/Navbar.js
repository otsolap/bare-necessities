import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../imgs/Avatar_sm.png'

export default function Nav() {
    return (
        <Navbar expand="lg" className="brand">
            <div className="container">
                <Navbar.Brand href="#"
                >
                    <img
                        src={logo}
                        width="80px"
                        height="80px"
                        className="d-inline-block"
                        alt="Bare Necessities"
                    />
                    <h6>Bare Necessities</h6>
                </Navbar.Brand>
            </div>
        </Navbar>
    )
}
