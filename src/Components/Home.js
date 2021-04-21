//import '../styles/Banner.css'
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


function Home() {

    const [products, setProducts] = useState([])
    //let [loading, setLoading] = useState(false);
    
    useEffect(() => {
        //setLoading(true)
        axios.get("https://oc-p5-api.herokuapp.com/api/cameras")
        .then(res => 
            setProducts(res.data),
        )
    }, [])
    console.log(products)

	return (
        <div className=''>
            <Jumbotron>
            <h1>WELCOME TO MY STORE</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Link to="/products"><button className='btn btn-success' variant="primary">les produits</button></Link>
            </p>
            </Jumbotron>
            <Carousel>
                {products.map(product => (
                    <Carousel.Item key={product.id}>
                    <img className="d-block w-25 h-25" src={product.imageUrl} alt={product.title}/>
                    <Carousel.Caption>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>          
                ))}
            </Carousel>
        </div>
    )  
}

export default Home
