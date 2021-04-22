//import '../styles/ProductItem.css'
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

function Cart (props) {  

    const cartItem = JSON.parse(localStorage.getItem("cart"))
    //const totalCart = localStorage.getItem('totalCart')
    let total = 0
    //const [count, setCount] = useState(0);
    console.log(cartItem)
    useEffect(() => {
        if(cartItem){
            totalPanier()
        }
      }, []);

        function totalPanier() {
            cartItem.forEach(function(result, index) {
              total = total + cartItem[index].price * cartItem[index].quantity;
              console.log(total)
              document.getElementById("prix_total").textContent = total + " €";
            });
            localStorage.setItem('totalCart', total)
        }
    
        function deleteCart() {
            localStorage.clear();
            window.location.reload();
        }

    if (!cartItem || cartItem.length === 0) {
        return(
            <div> <Banner />
                <div className="col-10 col-lg-6 mx-auto p-5 text-center border rounded fw-bold">Votre panier est vide</div>
            </div>
        )
    } else {
        
        return (
            <div> <Banner />
           <div className="row justify-content-center">
                <h2 className="text-center">PANIER</h2>
               <div className="col-10 col-lg-8">
                    <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Article</th>
                            <th>Prix</th>
                            <th>Qté</th>
                            <th>Sous-total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.map(item => (
                            <tr key={item.id}>
                                <CartItem 
                                id={item.id}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                price={item.price}
                                quantity= {item.quantity}
                                subTotal= {item.subTotal}
                                totalPanier={totalPanier}
                                />                            
                            </tr> 
                        ))}  
                    </tbody>
                    </table> 
                </div>
                <div className="col-10 col-lg-2 ">
                    <div className="border rounded p-2">
                        <div className="">Articles dans le panier </div>
                        <div className="fw-bold fs-2">{cartItem.length}</div>
                        <div className="">Total panier </div>      
                        <div className="fw-bold fs-2" id="prix_total"></div>
                        <Link className="mb-5 mt-3" to="/cart"><button className="btn">VALIDEZ VOTRE COMMANDE</button></Link>
                        <button className="btn" onClick={deleteCart}>VIDER LE PANIER</button>
                    </div>      
                </div>      
            </div>
            </div>           
        )
    }     
}
export default Cart

