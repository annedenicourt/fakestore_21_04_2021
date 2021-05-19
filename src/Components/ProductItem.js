import '../styles/ProductItem.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {AddCart} from '../store/actions/cartActions'

function ProductItem (props) { 
    
    const dispatch = useDispatch()

    return (
       <div>
            <Card className="card_product mb-4 mx-auto shadow">
                <Card.Img className="card_image p-3" variant="top" src={props.imageUrl}  alt="" />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{props.name}</Card.Title>
                    <Card.Text className="d-block text-truncate mt-4">{props.description}</Card.Text>
                    <Card.Text className="fw-bold fs-4">{props.price} €</Card.Text>
                    <Card.Text className="text-center mb-1">
                        <Button className="button_item fw-bold text-center" variant="outline-dark" onClick={() => dispatch(AddCart(props.product))}>Ajouter au panier</Button>
                    </Card.Text>
                    <Card.Text className="fw-bold text-center">
                        <Link className="" to={{ pathname: `/product/${props.id}`}}><button className="info_item btn fw-bold"><i className="bi bi-plus-circle-fill"></i> d'infos</button></Link> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>           
    )
}
export default ProductItem