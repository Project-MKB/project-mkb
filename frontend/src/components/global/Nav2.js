import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class Nav2 extends Component {
    render(){
        return(
            <nav className="col-md-2 d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={ faHome } size="2x" />
                            </a>
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={ faUserCog } size="2x" />
                            </a>
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={ faPlusSquare } size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav2;
