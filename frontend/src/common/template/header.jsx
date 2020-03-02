import React from 'react'
import Navbar from './navbar'

export default props =>(
    <header className='main-header'>
        <a href='/#/' className='logo' style={{backgroundColor: '#db1f2a'}}>
            <span className='logo-mini'><b>P</b>B</span>
            <span className='logo-lg'>
                <i className='fa fa-gamepad'></i>
                <b> Pokemon</b> battle
            </span>
        </a>
        <nav className='navbar navbar-static-top' style={{backgroundColor: '#fc3d32'}}>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar/>
        </nav>
    </header>
)