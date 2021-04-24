import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { updateCartQuantity, removeFromCart } from '../../store/actions/cartActions';
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../store/actions/cartActions';


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
            btnVisible: false
        };
    }

    increaseQuantity = (index) => {
        console.log(this.props.item.id)
        console.log(this.props.cart)
        this.props.IncreaseQuantity(this.props.item.id);
        this.setState({
            quantity: this.state.quantity+1,
        });
    }
    decreaseQuantity = (index) => {
        this.props.DecreaseQuantity(this.props.item.id);
        this.setState({
            quantity: this.state.quantity-1,
        });
    }

    deleteItem = (index) => {
        this.props.DeleteCart(this.props.item.id);
    }

  render() {

    const { item } = this.props;

    return (<> 
        <td className=""><img src={item.imageUrl} height="50" alt="" /></td>
        <td>{item.name}</td>
        <td>{item.price} €</td>
        <td id="quantity">{ this.state.quantity }</td>
        <td>{this.state.quantity * item.price} €</td>
        <td>
            {this.state.quantity > 1 ?
            <button className=" btn btn-sm m-0" onClick={this.decreaseQuantity}><i className="bi bi-dash-circle-fill"></i></button>
            :<button className=" btn btn-sm m-0"  disabled><i className="bi bi-dash-circle-fill"></i></button>
            }
            <button className="btn btn-sm m-0 p-0" onClick={this.increaseQuantity}><i className="bi bi-plus-circle-fill"></i></button>

        </td>
        <td><button className="btn btn-sm" onClick={this.deleteItem}><i className="bi bi-trash-fill"></i></button></td>        
        </>         
      )
  }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
    }
  };

/*const mapDispatchToProps = (dispatch) => {

    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
};*/

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Item)


/*import '../styles/Cart.css'
import React, { useState, useEffect } from 'react';

function CartItem (props) {  

    const cartItem = JSON.parse(localStorage.getItem("cart"))
    const totalCart = JSON.parse(localStorage.getItem("totalCart"));
    const [count, setCount] = useState(props.quantity);

    function increaseQuantity() {
        const index = cartItem.findIndex(item => item.name === props.name)
        setCount(count + 1)
        ++ cartItem[index].quantity
        let totalPanier = props.totalPanier
        localStorage.setItem('cart', JSON.stringify(cartItem))
        localStorage.setItem('totalCart', JSON.stringify(totalCart))
        window.location.reload()
        //props.totalPanier()
    }

    function decreaseQuantity() {
        const index = cartItem.findIndex(item => item.name === props.name)
        setCount(count - 1)
        -- cartItem[index].quantity
        let totalPanier = props.totalPanier
        localStorage.setItem('cart', JSON.stringify(cartItem))
        localStorage.setItem('totalCart', JSON.stringify(totalCart))
        window.location.reload()
        //props.totalPanier()
    }

    function deleteItem(index) {
        cartItem.splice(index,1);
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(cartItem))
        window.location.reload();
    }

    return ( <> 
        <td className="" ><img src={props.imageUrl} height="50" alt="" /></td>
        <td>{props.name}</td>
        <td>{props.price} €</td>
        <td id="quantity">{count}</td>
        <td>{count * props.price} €</td>
        <td>
            {count > 1 ?
            <button className=" btn btn-sm m-0 p-0" onClick={decreaseQuantity}><i className="bi bi-dash-circle-fill"></i></button>
            :<button className=" btn btn-sm m-0" onClick={decreaseQuantity} disabled><i className="bi bi-dash-circle-fill"></i></button>
            }
            <button className="btn btn-sm m-0 p-0" onClick={increaseQuantity}><i className="bi bi-plus-circle-fill"></i></button>

        </td>
        <td><button onClick={deleteItem} className="btn btn-sm"><i className="bi bi-trash-fill"></i></button></td>        
        </>           
    )
}
export default CartItem*/

