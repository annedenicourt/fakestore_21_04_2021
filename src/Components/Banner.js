import '../styles/Banner.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_mystore.png'
import { useSelector } from 'react-redux'

function Banner() {
    const cart = useSelector(state => state.cart.cart)
    const numberCart = useSelector(state => state.cart.numberCart)

        return (  
            <div className='row banner px-4 mb-5'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="border_banner container-fluid border-bottom pb-3 justify-content-center">
                    <NavLink className="nav-link" to="/"><img src={logo} height="50" alt='logo mystore'/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item me-5"><NavLink className="nav-link fw-bold pt-2" to="/products">BOUTIQUE</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link fw-bold " to="/cart">PANIER<i className="bi bi-cart2 ms-2"></i></NavLink></li>
                                
                                { cart.length > 0 ? (
                                    <span className="number_cart text-white text-center fw-bold">{ numberCart }</span>
                                    ) : null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
export default Banner