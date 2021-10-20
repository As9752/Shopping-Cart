import React from 'react'
import "./Product.css"
 function Product({state}){
    return (
        <div className="product_wrap">
        {
        state.map((items)=>{
            return <div className="product" key={items.id}>
            <img src={items.image.meta.url}/>
            <h2>{items.name}</h2>
            <p>{items.price.formatted_with_symbol}</p>
            <button>Add to Cart</button>
            </div>
        })
        }
        </div>
    )
}
export default Product;
