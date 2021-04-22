import '../styles/ProductItem.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ProductItem (props) { 

    //const totalCart = JSON.parse(localStorage.getItem("totalCart")) || []
    //const [cart, updateCart] = useState([cartItem]);
    
    function addToCart(){
        let cartItem = JSON.parse(localStorage.getItem("cart")) || []
        const alreadyInCart = cartItem.find((item) => item.name === props.name)

        if (alreadyInCart) {
            console.log("déjà dans le panier")
            const indexItem = cartItem.findIndex(item => item.name === props.name)
            cartItem.splice(indexItem,1)
            
            cartItem.push({
                id: alreadyInCart.id,
                name : alreadyInCart.name,
                price: alreadyInCart.price,
                imageUrl: alreadyInCart.imageUrl,
                quantity: alreadyInCart.quantity+1,
                subTotal : alreadyInCart.price*1
            })
            localStorage.setItem('cart', JSON.stringify(cartItem))
        } else {
            cartItem.push({
                id: props.id,
                name : props.name,
                price: props.price,
                imageUrl: props.imageUrl,
                quantity: 1,
                subTotal : props.price*1
            })
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItem))
        //localStorage.setItem('totalCart', totalCart + props.price)
    }

    return (
       <div>
            <Card className="card_product mb-4 mx-auto">
                <Card.Img className="card_image p-3" variant="top" src={props.imageUrl}  alt="" />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{props.name}</Card.Title>
                    <Card.Text className="d-block text-truncate mt-4">{props.description}</Card.Text>
                    <Card.Text className="fw-bold fs-4">{props.price} €</Card.Text>
                    <Card.Text className="text-center mb-1">
                        <Button className="fw-bold text-center" variant="outline-dark" onClick={addToCart}>Ajouter au panier</Button>
                    </Card.Text>
                    <Card.Text className="fw-bold text-center">
                        <Link className="" to={{ pathname: `/product/${props.id}`}}><button className="btn fw-bold"><i className="bi bi-plus-circle-fill"></i> d'infos</button></Link> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>           
    )
}
export default ProductItem

