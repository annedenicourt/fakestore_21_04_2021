//import '../styles/ProductItem.css'
import React, { useState, useEffect } from 'react';

function CartItem (props) {  

    const cartItem = JSON.parse(localStorage.getItem("cart"))
    const totalCart = JSON.parse(localStorage.getItem("totalCart"));
    const [count, setCount] = useState(props.quantity);

    function increaseQuantity() {
        const index = cartItem.findIndex(item => item.name === props.name)
        setCount(count + 1)
        let ajoutQuantite = ++ cartItem[index].quantity
        let totalPanier = props.totalPanier
        localStorage.setItem('cart', JSON.stringify(cartItem))
        localStorage.setItem('totalCart', JSON.stringify(totalCart))
        window.location.reload()
    }

    function decreaseQuantity() {
        const index = cartItem.findIndex(item => item.name === props.name)
        setCount(count - 1)
        let retraitQuantite = -- cartItem[index].quantity
        let totalPanier = props.totalPanier
        localStorage.setItem('cart', JSON.stringify(cartItem))
        localStorage.setItem('totalCart', JSON.stringify(totalCart))
        window.location.reload()
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
            <button className="btn btn-secondary btn-sm me-2" onClick={decreaseQuantity}>-</button>
            :""
            }
            <button className="btn btn-secondary btn-sm me-2" onClick={increaseQuantity}>+</button>

        </td>
        <td><button onClick={deleteItem} className="btn btn-danger btn-sm"><i className="bi bi-trash-fill"></i></button></td>        
        </>           
    )
}
export default CartItem

