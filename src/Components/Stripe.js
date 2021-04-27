import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../styles/Stripe.css";
import { useSelector } from 'react-redux'
import logo from '../assets/logo_mystore.png'

const promise = loadStripe("pk_test_51Ik5dgDrJElt9mkCRM54icT2RiqrDyYXEaFnJVtU82HisGZdzAUWUAEVPhWYXvYosgRI87NOBpAVkfgjmMCYmmP2008PTCQhgw");

export default function App() {
    const cart = useSelector(state => state.cart.cart)
    const numberCart = useSelector(state => state.cart.numberCart)

    let total = 0;
    cart.map(item => 
        total += item.price * item.quantity
    );
    console.log(total)

  return (

    <div className="row m-0">

        <div className="bg_checkout col-10 col-lg-6 p-5 ">
            <div className="text-center mt-5 mb-5"><img className="w-50" src={logo} height="" alt="" /></div>
        
        <div className="p-5 w-75 mx-auto border rounded bg-light shadow">
        <h4 className="mb-4 pb-3 border-bottom">Récapitulatif de la commande</h4>
        <div className="pb-3 mb-5 border-bottom">
                {cart.map(item => (
                    <div className="mb-2 d-flex justify-content-between align-items-center" key={item.id}>
                        <div className=""><img src={item.imageUrl} height="60" alt="" /></div>
                        <div>{item.name}</div>
                        <div>{item.price* item.quantity}€</div>
                        <div id="quantity">Qté { item.quantity }</div>                          
                    </div> 
                ))}  
            </div>
       
        <div className="text-end">Articles </div>
        <div className="fw-bold fs-2 mb-4 text-end">{numberCart}</div>
        <div className="text-end">Total panier </div>      
        <div className="fw-bold fs-2 mb-4 text-end" id="prix_total">{total} €</div>
        </div>


        </div>

        <div className="col-10 col-lg-6 bg-light">
            <div className="w-50 mx-auto">
                <Elements stripe={promise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    </div>  
  );
}



/*import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Stripe.css'
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux'

const stripePromise = loadStripe("pk_test_51Ik5dgDrJElt9mkCRM54icT2RiqrDyYXEaFnJVtU82HisGZdzAUWUAEVPhWYXvYosgRI87NOBpAVkfgjmMCYmmP2008PTCQhgw");

const ProductDisplay = ({ handleClick, cart }) => (
    <section>
      <div className="product">
      <h3>Articles</h3>
      {cart.map(item => (
        <div key={item.id}>
            <img src={item.imageUrl} height="40" alt="" />
            {item.name}
            Prix : {item.price}
            Qté : {item.quantity}
        </div>
        ))} 
        <div className="description">{}</div>
      </div>
      <button type="button" id="checkout-button" role="link" onClick={handleClick}>
        Checkout
      </button>
    </section>
  );


const Message = ({ message }) => (
  <section className="mt-5 p-5 w-50 mx-auto text-center border rounded shadow bg-white">
    <p className="w-50 fs-4 mx-auto mb-5">{message}</p>
    <Link className="" to="/products"><button className='button btn btn-outline-dark btn-lg fw-bold'><i className="bi bi-arrow-left-circle me-2"></i>RETOUR BOUTIQUE</button></Link>
  </section>
);

export default function Payment() {

    const [message, setMessage] = useState("");
    const cart = useSelector(state => state.cart.cart)
    const numberCart = useSelector(state => state.cart.numberCart)

    let total = 0;
    cart.map(item => 
        total += item.price * item.quantity
    );
    console.log(total)


  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Commande confirmée ! Vous allez recevoir un email de confirmation");
    }

    if (query.get("canceled")) {
      setMessage("Paiement annulé... Continuez vos achats et validez votre commande plus tard");
        }
  }, []);

  const handleClick = async (event) => {

    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({total})
        
    });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message}/> 
  ) : (
    <ProductDisplay handleClick={handleClick} cart={cart}/>
    );
}*/


