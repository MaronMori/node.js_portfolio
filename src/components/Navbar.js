// components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const NavigationBar = () => {
    return (
        <nav className="my-3 navbar navbar-expand-lg navbar-light bg-light w-75 ms-auto">
            <ul className="list-unstyled d-flex ms-auto">
                <li className="me-3"><a href="#home" className="text-decoration-none text-black">Home</a></li>
                <li className="me-3"><a href="#home" className="text-decoration-none text-black">My Work</a></li>
                <li className="me-3"><a href="#home" className="text-decoration-none text-black">My Award</a></li>
                <li className="me-3"><a href="#home" className="text-decoration-none text-black">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;