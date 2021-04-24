import '../styles/ProductsList.css'
import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Banner from './Banner';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'
import axios from "axios"
import Footer from './Footer';
import {AddCart} from '../store/actions/cartActions'


class ProductsList extends Component {
    state = {
        products: [],
        filter:""
    }

    componentDidMount(){
        this.getAllProducts();
    }

    getAllProducts() {
        axios.get("https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products")
        .then(res => 
            this.setState({ products: res.data })
        )
    }
    onChangeFilter = (e) => {
        this.setState({ filter: e.target.value })
    }

    addToCart = (item) => {
        this.props.AddCart(item);
    }

    render() {
        console.log(this.props.cart)
        return (
            <div> <Banner />
            <div className="row justify-content-center ">
                <h2 className="title_productslist text-center fs-1">MY STORE</h2>
                <div className="col-12 col-lg-10 ">
                    <div className="text-center">{this.state.products.length} articles</div>
                    <Form className="text-end me-4" inline>
                        <Form.Control onChange={this.onChangeFilter} as="select" className="my-1 mr-sm-2" custom>
                            <option value="allproducts">Tous les produits</option>
                            <option value="Camera">Appareils-photo</option>
                            <option value="Deco">Déco rétro</option>
                            <option value="Jouets">Jouets d'antan</option>
                        </Form.Control>
                    </Form> 
                    <div className='d-lg-flex flex-row flex-wrap justify-content-evenly p-2 ms-2 mt-4 mb-5'>
                        {this.state.filter === "Camera" || this.state.filter === "Deco" || this.state.filter === "Jouets" ?
                            this.state.products.filter(product => product.category === this.state.filter).map(filteredProduct => (
                                <div className='' key={filteredProduct.id}>
                                    <ProductItem
                                    id={filteredProduct.id}
                                    name={filteredProduct.name}
                                    imageUrl={filteredProduct.imageUrl}
                                    description={filteredProduct.description}
                                    price={filteredProduct.price}
                                    quantity= {filteredProduct.quantity}
                                    addToCart={this.addToCart}
                                    />
                                </div>
                            ))
                        : this.state.products.map(product => (
                            <div className='' key={product.id}>
                                <ProductItem
                                    product={product}
                                    id={product.id}
                                    name={product.name}
                                    imageUrl={product.imageUrl}
                                    description={product.description}
                                    price={product.price}
                                    quantity= {product.quantity}
                                    addToCart={this.addToCart}
                                />
                            </div>
                          ))
                        }
                    </div>
                </div>      
            </div>
            <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)