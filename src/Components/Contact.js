import '../styles/ProductItem.css'
import React from 'react';
import Banner from './Banner'
import emailjs from 'emailjs-com';
//import logo from '../assets/logo_mystore.png'
import Flip from 'react-reveal/Flip';
import contact4 from '../assets/contact_us4.svg'
import Swal from 'sweetalert2'
import Footer from './Footer';

function Contact () { 

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_if9q8wq', 'contact_form', e.target, 'user_BwL24v0D7KuEvBfg9MBkR')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Super !',
                text: 'Votre message a bien été envoyé',
              })
              document.getElementById('contact_form').reset()

          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div> <Banner />
        <div className="row mx-3 mx-lg-5 py-5 mb-5 rounded bg-light shadow">
        <div className="col-12 col-lg-6 pt-5 pb-5">
        <Flip left>
        <div className="text-center"><img className="w-75" src={contact4} height="" alt="logo mystore" /></div>
        </Flip>
        </div>
        <div className="col-12 col-lg-6 px-4">
            <form className="contact-form text-center bg_checkout px-5 rounded" id="contact_form" onSubmit={sendEmail}>
                <h2 className="title_productslist pt-4 text-center text-white">NOUS SOMMES À VOTRE ÉCOUTE</h2>
                <input type="hidden" name="contact_number" />
                <div className="mb-3">
                    <label htmlFor="name"></label>
                    <input className="form-control" type="text" name="user_name" id="name" placeholder="Votre nom" required />
                    <label htmlFor="email"></label>
                    <input className="form-control" type="email" name="user_email" id="email" placeholder="Votre adresse mail" required />
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea className="form-control" rows="5" name="message" id="message" placeholder="Votre message" required />
                </div>
                <button className='button_item button btn btn-outline-dark mt-3 mb-3 fw-bold' type="submit"><i className="bi bi-envelope-fill text-white"></i> ENVOYER</button>
            </form>
         </div>
         </div>
         <Footer />
         </div>          
    )
}
export default Contact