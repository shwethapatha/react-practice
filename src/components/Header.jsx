import React from 'react'
import Header from './components/Header'
import { NavLink } from 'react-dom';
import carousel from '../assets/carousel-1.png'
import carousel from '../assets/carousel-2.png'
import '../styles/style.css';

const Header = () => {
    return (
        <>
            <div className="container-fluid page-header mb-5 p-0" style="background-image: url(img/carousel-bg-2.jpg);">
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><NavLink to="#">Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="#">Pages</NavLink></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
     </div>
   
        </>
    )
}

export default Header;