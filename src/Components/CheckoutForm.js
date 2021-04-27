import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function CheckoutForm() {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector(state => state.cart.cart)

    let total = 0;
    cart.map(item => 
        total += item.price * item.quantity
    );

  useEffect(() => {
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({total})
      })
      .then(res => { return res.json() })
      .then(data => { setClientSecret(data.clientSecret) });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();

    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      shipping: {
        address: {
          line1: address,
          city: city
        },
        name: userName
      },
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
    } else {
      setError(null);
      setSucceeded(true);
    }
  };


  if (succeeded) {
        Swal.fire({
            icon: 'success',
            title: 'Votre commande a été validée',
            showConfirmButton: false,
            timer: 5000
          })     
        localStorage.clear()    
        setTimeout(function() {window.location.href = "/products" }, 4000);
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <div> Coordonnées de livraison</div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre adresse mail"/>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Votre nom"/>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Votre adresse"/>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ville" />
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <button disabled={disabled || succeeded} id="submit">
                    Payez maintenant {total} €
                </button>
                {error && (
                    <div className="card-error" role="alert">{error}</div>
                )}
        </form>
        
  );
}


