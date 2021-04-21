import '../styles/Banner.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_shopping.png'

function Banner() {
    const role = localStorage.getItem("role");

	return (
        <div className='row banner ps-4 pe-4 mb-5'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <NavLink className="nav-link" to="/"><img src={logo} height="100" alt='Groupomania'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link fw-bold" to="/products">BOUTIQUE</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link fw-bold" to="/cart">PANIER<i className="bi bi-person-circle ms-2"></i></NavLink></li>
                            {role === 'Moderator' ?
                            <li className="nav-item"><NavLink className="nav-link border rounded fw-bold ps-2" to="/admin/dashboard"><i className="bi bi-key-fill me-2"></i>ACCES ADMIN</NavLink></li>
                            : ""
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )  
}

export default Banner
