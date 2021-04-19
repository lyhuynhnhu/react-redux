import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUber } from '@fortawesome/free-brands-svg-icons'

import './header.css'

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faUber} size="2x" />
            <FontAwesomeIcon icon={faBars} size="sm" />
        </header>
    )
}

export default Header