import React from 'react';

import logo from '../../imgs/Avatar_sm.png'

export default function Nav() {
    return (
        <nav className="brand py-2">
            <div className="container">
                <a href="#"
                    className="no-underline inline-block"
                >
                    <img
                        src={logo}
                        width="80px"
                        height="80px"
                        className="aspect-square object-cover"
                        alt="Bare Necessities"
                    />
                    <h6>Bare Necessities</h6>
                </a>
            </div>
        </nav>
    )
}
