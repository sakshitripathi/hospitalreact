import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <span class="navbar-toggle" id="js-navbar-toggle">
                <i class="fas fa-bars"></i>
            </span>
            
            <ul class="main-nav" id="js-menu">
                <img src="logo.png" alt="logo"></img>
                <li>
                    <a href="#" class="nav-links">PATIENTS</a>
                </li>
                <li>
                    <a href="#" class="nav-links">CALENDAR</a>
                </li>
                <li>
                    <a href="#" class="nav-links">USERS</a>
                </li>
                <li>
                    <a href="#" class="nav-links">BILLING</a>
                </li>

            </ul>
        </nav>
        
    )
}