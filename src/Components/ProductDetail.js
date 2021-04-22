import '../styles/ProductItem.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';


function Detail () { 
    const [product, setProduct] = useState({})
    const { id } = useParams();

    function addToCart(){
        const cartItem = JSON.parse(localStorage.getItem("cart")) || []
        const alreadyInCart = cartItem.find((item) => item.name === product.name)

        if (alreadyInCart) {
            console.log("déjà dans le panier")
            const indexItem = cartItem.findIndex(item => item.name === product.name)
            cartItem.splice(indexItem,1)
            
            cartItem.push({
                id: alreadyInCart.id,product,
                name : alreadyInCart.name,
                price: alreadyInCart.price,
                imageUrl: alreadyInCart.imageUrl,
                quantity: alreadyInCart.quantity+1,
                subTotal : alreadyInCart.price*1
            })
            localStorage.setItem('cart', JSON.stringify(cartItem))
        } else {
            cartItem.push({
                id: product.id,
                name : product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1,
                subTotal : product.price*1
            })
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItem))
        //localStorage.setItem('totalCart', totalCart + props.price)
    }


    useEffect(() => {
        axios.get('https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products/'+id)
        .then(res => 
            setProduct(res.data),
        )
    }, [])
    console.log(product)

    return (
       <div className="container w-75">
        <h2 className="title_productslist text-center mt-5 mb-5 fs-1">INFOS PRODUIT</h2>
            <Card className="mx-3 mb-5">
                <div className="row">
                    <div className="col-lg-7">
                        <InnerImageZoom className="img_detailproduct" src={product.imageUrl} zoomSrc={product.imageUrl} alt={product.name} />
                    </div>
                        <Card.Body className="col-lg-5">
                            <Card.Title className="mb-5 fw-bold">{product.name}</Card.Title>
                            <Card.Text className="mb-5">{product.description}</Card.Text>
                            <Card.Text className="mb-5 fw-bold fs-2">{product.price} €</Card.Text>
                            <Card.Text className="text-center">
                                <Button className="fw-bold text-center" variant="outline-dark" onClick={addToCart}>Ajouter au panier</Button>
                            </Card.Text>
                            <Card.Text className="text-center">
                                <Link className="" to="/products"><button className="btn fw-bold">Retour boutique</button></Link>
                                <Link className="" to="/cart"><button className="btn fw-bold">Voir le panier</button></Link> 
                            </Card.Text>
                        </Card.Body>
                </div>
            </Card>
        </div>           
    )
}
export default Detail




