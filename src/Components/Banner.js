import '../styles/Banner.css'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../assets/logo_mystore.png'

class Banner extends Component {

    render() {
        return (  
            <div className='row banner px-4 mb-5 mx-3'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="border_banner container-fluid border-bottom mx-5 pb-3">
                    <NavLink className="nav-link" to="/"><img src={logo} height="50" alt=''/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item me-5"><NavLink className="nav-link fw-bold" to="/products">BOUTIQUE</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link fw-bold " to="/cart">PANIER<i className="bi bi-cart2 ms-2"></i></NavLink></li>
                                { this.props.cart.length > 0 ? (
                                    <span className="label label-info">{ this.props.numberCart }</span>
                                    ) : null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        numberCart: state.cart.numberCart
    }
};

export default connect(mapStateToProps)(Banner);



/*import '../styles/Banner.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_mystore.png'
import { connect } from 'react-redux';

function Banner() {

	return (
        <div className='row banner px-4 mb-5 mx-3'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="border_banner container-fluid border-bottom mx-5 pb-3">
                    <NavLink className="nav-link" to="/"><img src={logo} height="50" alt='Groupomania'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5"><NavLink className="nav-link fw-bold" to="/products">BOUTIQUE</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fw-bold " to="/cart">PANIER<i className="bi bi-cart2 ms-2"></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )  
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        numberCart: state.cart.numberCart
    }
};

export default connect(mapStateToProps)(Banner);*/