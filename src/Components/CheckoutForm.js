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
  const [codePostal, setCodePostal] = useState('');
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
    hidePostalCode: true,
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
          city: city,
          postal_code: codePostal
        },
        name: userName
      },
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Le paiement a échoué ${payload.error.message}`);
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
        <div>
            <h4 className="mt-5 pb-3 border-bottom fw-bold">FINALISEZ VOTRE COMMANDE</h4>

            <div className="p-3 mt-5 mx-auto border rounded bg-light shadow">
                <form className="p-5" onSubmit={handleSubmit}>
                <div className="mb-1"> 1. Vos coordonnées de livraison</div>

                <div className=" ">
                    <label htmlFor="email" className="form-label"></label>
                    <input type="email" className="form-control"  id="email" placeholder="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className=" ">
                    <label htmlFor="name" className="form-label"></label>
                    <input type="text" className="form-control"  id="name" placeholder="Nom" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                
                <div className=" ">
                    <label htmlFor="address" className="form-label"></label>
                    <input type="text" className="form-control"  id="address" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                </div>
                <div className=" ">
                    <label htmlFor="code" className="form-label"></label>
                    <input type="text" className="form-control"  id="code" placeholder="Code postal" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} required/>
                </div>
                <div className=" mb-3">
                    <label htmlFor="city" className="form-label"></label>
                    <input type="text" className="form-control"  id="city" placeholder="Ville" value={city} onChange={(e) => setCity(e.target.value)} required/>
                </div>
            
                {error && (
                    <div className="card-error" role="alert">{error}</div>
                )}
                <div className="mt-3 mb-3"> 2. Votre paiement</div>
                <CardElement className="card_element" options={cardStyle} onChange={handleChange}/>
                <button className="button_payment btn" disabled={disabled || succeeded} id="submit">Payez maintenant {total} €</button>
                {error && (
                    <div className="card-error" role="alert">{error}</div>
                )}
                </form>
            </div>
    </div>
        
  );
}


