//import '../styles/ProductItem.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
       <div>
            <Card className="mb-4 mx-auto">
                <Card.Img className="p-3" variant="top" src={product.imageUrl}  alt="" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="">{product.description}</Card.Text>
                    <Card.Text className="fw-bold">{product.price} €</Card.Text>
                    <Button onClick={addToCart}>Ajouter au panier </Button>
                    <Link to="/products">Retour boutique</Link> 
                    <Link to="/cart">Voir le panier</Link> 
                </Card.Body>
            </Card>
        </div>           
    )
}
export default Detail




