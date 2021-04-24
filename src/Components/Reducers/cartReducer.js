
import { NavLink } from 'react-router-dom';

function Banner() {
    const role = localStorage.getItem("role");

	return (
        <div className='row banner px-4 mb-5 mx-3'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="border_banner container-fluid border-bottom mx-5 pb-3">
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

export default Banner
