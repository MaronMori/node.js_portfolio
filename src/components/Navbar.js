// components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const NavigationBar = () => {
    return (
        <nav className="sticky-top navbar navbar-expand-lg   ms-auto rounded-bottom" style={{backgroundColor: "#9EC8B9"}}>
            <ul className="list-unstyled d-flex ms-auto pt-2">
                <li className="me-3"><a href={"#home"} className="text-decoration-none" style={{color:"rgb(9, 38, 53)"}}>Home</a></li>
                <li className="me-3"><a href={"#work"} className="text-decoration-none" style={{color:"rgb(9, 38, 53)"}}>My Work</a></li>
                <li className="me-3"><a href={"#award"} className="text-decoration-none" style={{color:"rgb(9, 38, 53)"}}>My Award</a></li>
                <li className="me-3"><a href={"#contact"} className="text-decoration-none" style={{color:"rgb(9, 38, 53)"}}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;