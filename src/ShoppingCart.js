import React from 'react'
import "./Cart.css"
 const ShoppingCart = () => {
    return (
        <div className="checkout">
        <div className="checkout_left">
         <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._
         CB423492668_.JPG" className="checkout_ad"/>
         <div>
             <h1>Hello Ashish</h1>
             <h2 className="checkout_title">Your Shopping Basket</h2>
         </div>
         <div className="checkoutProduct">
             <img src="https://i.pinimg.com/originals/57/4f/0f/574f0fb06cf0d52d3513e5177593431a.png" className="checkoutproduct_img"/>
         <div className="checkoutProduct_info">
             <p className="title">Productname</p>
             <p className="Price">Price <strong>289</strong></p>
             <button>Remove from Basket</button>
             </div>
         </div>
        </div>
        <div className="checkout_right">
          <div className="subtotal">
              <p>Subtotal 2 items<strong> 299</strong> </p>
          </div>
          <button>Proceed to Payment</button>
        </div>
        </div>
    )
}
export default ShoppingCart;
