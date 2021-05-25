import '../styles/Cart.css'
import Banner from './Banner';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Footer from './Footer';
import { useSelector } from 'react-redux'

function Cart (props) {  
    const cart = useSelector(state => state.cart.cart)
    const numberCart = useSelector(state => state.cart.numberCart)

    let total = 0;
    cart.map(item => 
        total += item.price * item.quantity
    );

    function deleteAllCart() {
        localStorage.clear()
        window.location.reload()
    }

    if (!cart || cart.length === 0) {
        localStorage.clear()
        return(
            <div className=""> 
                <Banner />
                <div className="empty_cart col-10 col-lg-6 mx-auto mb-5 p-5 text-center border rounded fw-bold shadow bg-white">
                    <div className="mb-2 fs-3">OUPS...</div>
                    <div className="mb-5 fs-5">VOTRE PANIER EST VIDE !</div>
                    <Link className="mb-5 mt-3" to="/products"><button className="button btn fw-bold">RETOUR BOUTIQUE</button></Link>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div> <Banner />
           <div className="row gap-5 justify-content-center mb-5 mx-0">
                <h2 className="text-center">PANIER</h2>
               <div className="col-10 col-lg-7 table-responsive">
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
                        {cart.map(item => (
                            <tr key={item.id}>
                                <CartItem 
                                item={item}
                                id={item.id}
                                name={item.name}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                price={item.price}
                                quantity= {item.quantity}
                                />                            
                            </tr> 
                        ))}  
                    </tbody>
                    </table> 
                </div>
                <div className="col-8 col-lg-2 ">
                    <div className="border rounded p-3 bg-white shadow">
                        <div className="">Articles </div>
                        <div className="fw-bold fs-2 mb-4">{numberCart}</div>
                        <div className="">Total panier </div>      
                        <div className="fw-bold fs-2 mb-4" id="prix_total">{total} €</div>
                        <Link className="mb-5 mt-3" to="/checkout"><button className="button btn btn-sm fw-bold">VALIDEZ VOTRE COMMANDE</button></Link>
                        <div className="text-center"><button className="btn btn-sm mt-4 text-center" onClick={deleteAllCart}>VIDER LE PANIER</button></div>
                    </div>      
                </div>      
            </div>
            <Footer />
            </div>           
        )
    }     
}
export default Cart

/*import React, { Component } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { connect } from 'react-redux';

class Cart extends Component {

    state = {
        productsInCart: this.props.cart,
    }

    render() {
        console.log(this.props.cart)

       let total = 0;
        this.props.cart.map(item => 
            total += item.price * item.quantity
        );

        if (!this.props.cart || this.props.cart.length === 0) {
            //localStorage.clear()
            return(
                <div> <Banner />
                    <div className="col-10 col-lg-6 mx-auto p-5 text-center border rounded fw-bold">Votre panier est vide</div>
                </div>
            )
        } else {

            return (
                <div className="">
                    <Banner />
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-7 me-5">
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
                                    {this.state.productsInCart.map(item => (
                                        <tr key={item.id}>
                                            <CartItem item={item} />                    
                                        </tr> 
                                    ))}
                                </tbody>
                            </table>   
                        </div>
                        <div className="col-6 col-lg-2 ">
                            <div className="border rounded p-3 shadow">
                                <div className="">Articles </div>
                                <div className="fw-bold fs-2 mb-4">{this.props.numberCart}</div>
                                <div className="">Total panier </div>      
                                <div className="fw-bold fs-2 mb-4" id="prix_total">{total} €</div>
                                <Link className="mb-5 mt-3" to="/cart"><button className="button btn btn-sm fw-bold">VALIDEZ VOTRE COMMANDE</button></Link>
                                <button className="btn mt-4" >VIDER LE PANIER</button>
                            </div>      
                        </div>   
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {

  return {
      cart: state.cart.cart,
      numberCart: state.cart.numberCart
  }
};

export default connect(mapStateToProps)(Cart)*/





