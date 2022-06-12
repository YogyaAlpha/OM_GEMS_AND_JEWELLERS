import React from 'react'
import MyLogo from './MyLogo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import TypeWriterEffect from 'react-typewriter-effect';
export default function Header() {
    // var typed = new typed(".auto-type", {
    //     strings : ["OM GEMS AND JEWELLERS","OM GEMS AND JEWELLERS","OM GEMS AND JEWELLERS"],
    //     typeSpeed : 150,
    //     backSpeed : 150,
    //     loop: true
    // })

    function onSearch(e) {
        console.log(e.target.value);
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light header">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={MyLogo} alt="" width="40" height="40"/>
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to='/Shop'>Shop</Link>
                            </li>
                            {/* <li class="nav-item">
                            <Link className="nav-link" to='/About'>About</Link>
                            </li> */}
                            <li class="nav-item">
                            <Link className="nav-link" to='/Contactus'>Contact Us</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2 inputHeader" type="search" placeholder="In beta version" aria-label="Search" onInput={onSearch} />
                            <button class="btn btn-outline-success buttonHeader btn-sm" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="Heading1">
            <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
          display: 'inline-block',
          textAlign: 'center',
          fontWeight: 'bolder',
          fontSize: '2.5rem',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
          'OM GEMS AND JEWELLERS 💎',
        //   'OM GEMS AND JEWELLERS',
        ]}
        multiTextDelay={2000}
        typeSpeed={100}
        
         />
            </div>
        </>
    )
}
