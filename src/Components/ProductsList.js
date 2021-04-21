//import '../styles/ProductsList.css'
import Banner from './Banner';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem'
//import GridLoader from "react-spinners/GridLoader"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function List() {
    const [products, setProducts] = useState([])
    //let [loading, setLoading] = useState(false);
    
    useEffect(() => {
        //setLoading(true)
        axios.get("https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products")
        .then(res => 
            setProducts(res.data),
        )
    }, [])

    return (
        <div> <Banner />
            <div className="row justify-content-center ">
                <h2 className="text-center">MY STORE</h2>
                <div className="col-12 col-lg-10 ">
                    <div className="">{products.length} articles</div>
                    <div className='d-lg-flex flex-row flex-wrap justify-content-evenly p-2 ms-2 '>
                        {products.map(product => (
                            <div className='' key={product.id}>
                                <ProductItem 
                                id={product.id}
                                name={product.name}
                                imageUrl={product.imageUrl}
                                description={product.description}
                                price={product.price}
                                quantity= {product.quantity}
                                />
                            </div>
                        ))}
                    </div>
                </div>      
            </div>
            {products.length <0 ?
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            :""
            }
            
        </div>
    )
}
export default List