import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Data from '../Data';
function ProductScreen(props) {
    console.log(props.match.params.id)
    const Product=Data.Products.find(x=>x._id===props.match.params.id);
    return (
        <div>
            <h1>{Product.name}</h1>
        </div>
    )
}

export default ProductScreen;

