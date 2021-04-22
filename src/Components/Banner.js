import '../styles/Banner.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_mystore.png'

function Banner() {
    const role = localStorage.getItem("role");

	return (
        <div className='row banner border-bottom ps-4 pe-4 mb-5 mx-5'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="nav-link" to="/"><img src={logo} height="70" alt='Groupomania'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5"><NavLink className="nav-link fw-bold" to="/products">BOUTIQUE</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fw-bold " to="/cart">PANIER<i class="bi bi-cart2 ms-2"></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )  
}

export default Banner
