import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo_mystore.png'
import Footer from './Footer';
import Card from 'react-bootstrap/Card'

function Home() {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get("https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products")
        .then(res => 
            setProducts(res.data),
        )
    }, [])
    console.log(products)

	return (<>
        <div className="row mx-0 mb-5 px-5 pb-3">
            <div className="col d-md-flex d-lg-flex justify-content-between">
                <img className="mt-2" src={logo} height="55" alt='Groupomania'/>
                <Link to="/contact"><button className='button btn btn-outline-dark mt-3 fw-bold'>CONTACT</button></Link>
            </div>                
        </div>
        <Card className="card_home mx-3 mb-5 shadow">
            <div className="row m-0">
                <Card.Body className="col-10 col-lg-6 mx-auto p-5 text-center">
                    <Fade left>
                        <Card.Title className="mt-lg-5 mb-5 fw-bold fs-2">BIENVENUE</Card.Title>
                        <Card.Text className="mb-5">MY STORE est une boutique spécialisée dans les objets vintage remis au goût du jour. Pour les amoureux des beaux objets qui racontent une histoire et les nostalgiques du temps passé...</Card.Text>
                        <Card.Text className="d-grid gap-2 d-md-flex justify-content-center">
                            <Button className="" variant="light" size="lg">+ D'INFOS</Button>
                            <Link className="" to="/products"><button className='button btn btn-outline-dark btn-lg fw-bold'>DÉCOUVRIR</button></Link>
                        </Card.Text>
                    </Fade>
                </Card.Body>
                <Fade right>
                    <div className="col-10 col-lg-6 mx-auto p-3">
                        <img src="https://source.unsplash.com/F3Dde_9thd8.jpg" className="title w-100" alt=""/>
                    </div>
                </Fade>
            </div>
        </Card>
        
            <div className="row mx-0 mb-5 justify-content-center">
            <Fade bottom>
            <div className="col-10 col-lg-6 mt-5 mb-5 p-5 text-center border rounded shadow bg-white">
                    <h2 className="title fw-bold mb-5">NOS PRODUITS </h2>
                    <div className="content mb-5">MY STORE vous propose sa gamme d'articles vintage au look indémodable. Découvrez les appareils photos vintage, les objets déco au style rétro et les jouets d'antan qui rappellent notre enfance...</div>
                    <div className="d-flex justify-content-around">
                        <figure className="figure">
                            <img src="https://source.unsplash.com/F3Dde_9thd8.jpg" className="title w-100" alt=""/>
                            <figcaption className="figure-caption mt-2">Appareils-photo vintage</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src="https://source.unsplash.com/51H2LuKFHsI.jpg" className="title w-100" alt=""/>
                            <figcaption className="figure-caption mt-2">Déco rétro</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src="https://source.unsplash.com/VYVp_vONi40.jpg" className="title w-100" alt=""/>
                            <figcaption className="figure-caption mt-2">Jouets d'antan</figcaption>
                        </figure>
                    </div>
                </div>
            </Fade>
            </div>
            <Footer />
            </>
    )  
}
export default Home