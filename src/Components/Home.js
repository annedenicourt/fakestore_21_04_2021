import '../styles/Home.css'
//import { NavLink } from 'react-router-dom';
//import logo from '../assets/logo_shopping.png'
//import Swal from 'sweetalert2';
//import Banner from './Banner'
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo_mystore.png'


function Home() {

    const [products, setProducts] = useState([])
    //let [loading, setLoading] = useState(false);
    
    useEffect(() => {
        //setLoading(true)
        axios.get("https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products")
        .then(res => 
            setProducts(res.data),
        )
    }, [])
    console.log(products)

	return (<>
            <div className="row px-4 mb-5">
                <div className="col d-flex justify-content-between">
                    <img className="mt-2" src={logo} height="55" alt='Groupomania'/>
                    <Link to="/products"><button className='btn btn-outline-dark mt-3'>Contact</button></Link>
                </div>
                <div></div>
                
            </div>
            <div className="row">
                <Fade left>
                <div className="col-10 col-lg-6 p-5">
                    <h2 className="title fw-bold mb-5">BIENVENUE </h2>
                    <div className="content mb-5">MY STORE est une boutique spécialisée dans les objets vintage remis au goût du jour. Pour les amoureux des beaux objets qui racontent une histoire et les nostalgiques du temps passé...</div>
                    <div className="">
                        <Button className="me-4" variant="light" size="lg">+ D'INFOS</Button>
                        <Link to="/products"><button className='button btn btn-outline-dark btn-lg fw-bold' >LA BOUTIQUE</button></Link>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="col-10 col-lg-6">
                    <img src="https://source.unsplash.com/F3Dde_9thd8.jpg" className="title w-100" alt=""/>
                </div>
                </Fade>
            </div>
            <div className="row justify-content-center">
            <Fade bottom>
            <div className="col-10 col-lg-6 p-5 text-center">
                    <h2 className="title fw-bold mt-5 mb-5">NOS PRODUITS </h2>
                    <div className="content mb-5">MY STORE est une boutique spécialisée dans les objets vintage remis au goût du jour. Pour les amoureux des beaux objets qui racontent une histoire et les amoureux du temps passé...</div>
                    <div className="d-flex justify-content-around">
                        <img src="https://source.unsplash.com/F3Dde_9thd8.jpg" className="title w-25" alt=""/>
                        <img src="https://source.unsplash.com/51H2LuKFHsI.jpg" className="title w-25" alt=""/>
                        <img src="https://source.unsplash.com/S-vkpXA3os8.jpg" className="title w-25" alt=""/>
                    </div>
                </div>
            </Fade>
            </div>
            </>
        
    )  
}

export default Home


/*<Carousel className="">
                {products.map(product => (
                    <Carousel.Item className="item_carousel justify-content-center" key={product.id}>
                    <img className="img_carousel w-75" src={product.imageUrl} alt={product.title}/>
                    <Carousel.Caption>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>          
                ))}
</Carousel>*/
