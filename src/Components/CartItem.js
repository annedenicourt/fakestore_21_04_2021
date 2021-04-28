import React, { useState } from 'react';
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../store/actions/cartActions';
import { useDispatch } from 'react-redux'

function Item(props) {

    const [quantity, setQuantity] = useState(props.quantity)
    const dispatch = useDispatch()
    //const cart = useSelector(state => state.cart.cart)

    const increaseQuantity = (index) => {
        dispatch(IncreaseQuantity(props.item.id))
        setQuantity(quantity+1)
    }

    const decreaseQuantity = (index) => {
        dispatch(DecreaseQuantity(props.item.id))
        setQuantity(quantity-1)
    }

    const deleteItem = (index) => {
        dispatch(DeleteCart(props.item.id))
    }

    return(
        <> 
        <td className=""><img src={props.imageUrl} height="50" alt="" /></td>
        <td>{props.name}</td>
        <td>{props.price} €</td>
        <td id="quantity">{ quantity }</td>
        <td>{quantity * props.price} €</td>
        <td>
            {quantity > 1 ?
            <button className=" btn btn-sm m-0" onClick={decreaseQuantity}><i className="bi bi-dash-circle-fill"></i></button>
            :<button className=" btn btn-sm m-0"  disabled><i className="bi bi-dash-circle-fill"></i></button>
            }
            <button className="btn btn-sm m-0 p-0" onClick={increaseQuantity}><i className="bi bi-plus-circle-fill"></i></button>
        </td>
        <td><button className="btn btn-sm" onClick={deleteItem}><i className="bi bi-trash-fill"></i></button></td>        
        </>     
    )
}
export default Item


/*class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
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
};

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Item)*/




