import '../styles/ProductItem.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { connect } from 'react-redux';
import {AddCart} from '../store/actions/cartActions'

class ProductDetail extends Component {
    state = {
        product: {},
    }

    componentDidMount(){
        this.getAllProducts();
    }

    getAllProducts() {
        //console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        axios.get('https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products/'+id)
        .then(res => 
            this.setState({ product: res.data })
        )
    }
    addToCart = (item) => {
        this.props.AddCart(this.state.product);
    }

    render() {
        const { product } = this.state;

        return (
            <div> <Banner />
       <div className="container">
        <h2 className="title_productslist text-center mt-5 mb-5 fs-1">INFOS PRODUIT</h2>
            <Card className="mx-3 mb-5 shadow">
                <div className="row m-0">
                    <div className="col-lg-7 px-3 pt-3 pb-2">
                        <InnerImageZoom className="img_detailproduct" src={product.imageUrl} alt={product.name} />
                    </div>
                        <Card.Body className="col-lg-5">
                            <Card.Title className="mb-5 fw-bold">{product.name}</Card.Title>
                            <Card.Text className="mb-2">{product.description}</Card.Text>
                            <Card.Text className="mb-4 fw-bold fs-2">{product.price} €</Card.Text>
                            <Card.Text className="text-center">
                                <Button className="button_item fw-bold text-center mb-2" onClick={this.addToCart}>Ajouter au panier</Button>
                            </Card.Text>
                            <Card.Text className="text-center">
                                <Link className="" to="/products"><button className="btn fw-bold"><i className="bi bi-arrow-left-short me-2"></i>Retour boutique</button></Link>
                                <Link className="" to="/cart"><button className="btn fw-bold">Voir le panier</button></Link> 
                            </Card.Text>
                        </Card.Body>
                </div>
            </Card>
        </div>
        </div>      
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddCart:item=>dispatch(AddCart(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
