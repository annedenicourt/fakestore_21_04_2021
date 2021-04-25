import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    
	return  <footer className="bg_footer mt-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-inline text-center pt-3">
                        <li className="list-inline-item"><a href=" ">Mentions légales</a></li>
                        <li className="list-inline-item">&middot;</li>
                        <li className="list-inline-item"><a href="mailto:contact@gmy-store.com">Nous contacter</a></li>
                        <li className="list-inline-item">&middot;</li>
                        <Link to="/privacy-policy"><li className="list-inline-item">Politique de confidentialité</li></Link>
                    </ul>
                </div>
            </div>
        </div>
</footer>
}
export default Footer





