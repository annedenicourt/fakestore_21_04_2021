import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    
	return  <footer className="bg_footer">
        <div className="container ">
            <div className="row">
                <div className="col">
                    <ul className="list-inline text-center pt-3">
                        <Link to="/contact"><li className="list-inline-item me-4">Nous contacter</li></Link>
                        <Link to="/privacy-policy"><li className="list-inline-item">Politique de confidentialité</li></Link>
                    </ul>
                </div>
            </div>
        </div>
</footer>
}
export default Footer





