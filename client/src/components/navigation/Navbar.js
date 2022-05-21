import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav className="brand py-2">
            <div className="container">
                <a href="#"
                    className="no-underline inline-block"
                >
                    <FontAwesomeIcon icon={faDumbbell} />
                    <h6>Bare Necessities</h6>
                </a>
            </div>
        </nav>
    )
}
