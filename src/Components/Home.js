import React from 'react'
import Data from '../Data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css"
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import Filters from './Filters';
import { Button ,Card} from 'react-bootstrap';
import SingleProduct from "./SingleProduct.js"
function Home(prod) {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  //  console.log(cart)
    // return (
        {/* <div className="Home">
         <Carousel
       additionalTransfrom={0}
       arrows
       autoPlaySpeed={3000}
       centerMode={false}
       className=""
       draggable
       focusOnSelect={false}
       infinite
       itemClass=""
       keyBoardControl
       minimumTouchDrag={80}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 4000,
             min: 1024
         },
         items:1
         },
         mobile:{
          breakpoint:{
             max:4000,
             min:1024
         },
         items:1
         },
         tablet:{
          breakpoint:{
             max:4000,
             min:1024
         },
         items:1
         }
       }}
       showDots
       sliderClass=""
       slidesToSlide={1}
       swipeable
       >
         <img src="https://assets.ajmadison.com/image/upload/c_limit,f_auto,fl_lossy.progressive,h_1000,q_auto,w_1000/v1/ajmadison/images/large_no_watermark/ffhi1832ts-frigidaire-30-inch-top-freezer-freestanding-stainless-steel-lifestyle-59ee43b97ce63_68e8b.jpg"
         style={{
         display:"block",
         margin:"auto",
         width:"100%",
         objectFit:"fill",
       }}
       alt="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ix1ib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
       />
          <img src="https://news-cdn.softpedia.com/images/news2/Hands-On-Lenovo-IdeaPad-Y70-Gaming-Laptop-with-Touch-Screen-457906-2.jpg"
         style={{
         display:"block",
         margin:"auto",
         width:"100%",
         position:"sticky",
         objectFit:"fill",
       }}
       alt=""
       />
         <img src="https://static.techspot.com/images2/news/ts3_thumbs/2020/10/2020-10-09-ts3_thumbs-518.jpg"
         style={{
         display:"block",
         margin:"auto",
         width:"100%",
         objectFit:"fill",
       }}
       alt=""
       />
         <img src="https://vibeconsulting.co/wp-content/uploads/2017/07/dreamstime_m_47068225.jpg"
         style={{
         display:"block",
         margin:"auto",
         width:"100%",
         objectFit:"fill",
       }}
       alt=""
       />
       </Carousel> */}
       {/* <div className="home">
       <Filters />
        <div className="Pro">
            Products
        </div>
                <ul className="products">
                {
                    Data.product.map(product=>
                <li>
                    <div className="product">
                        <img className="product-image" src={product.Image} alt="product"></img>
                       <div className="product-name">
                       <Link to={/product/+product._id}>{product.name}</Link>;
                       </div>
                       <div className="product-brand">{product.brand}</div>
                       <div className="product-price">{product.price}</div>
                       <div className="product-rating">**{product.rating}</div>
                       <div className="product-instock">stock:{product.inStock}</div>
                       <div className="product-delivery">fastDelivery: {product.fastDelivery}</div>
                       {
                         cart.some(p=>p.id===product._id) ? ( <Button 
                         onClick={()=>{
                           dispatch({
                             type:'REMOVE_TO_CART',
                             payload:prod,
                           })
                         }} variant="danger">Remove from cart</Button>
                         ):
                         (<Button onClick={()=>{
                           dispatch({
                             type:'ADD_TO_CART',
                             payload:prod,
                           })
                         }}disabled={!product.inStock}>Add to cart</Button>)

                       }
                    </div>
                </li>
                    )
                }
                </ul>
                {/*  */}
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <>
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 4000,
          min: 1024
      },
      items:1
      },
      mobile:{
       breakpoint:{
          max:4000,
          min:1024
      },
      items:1
      },
      tablet:{
       breakpoint:{
          max:4000,
          min:1024
      },
      items:1
      }
    }}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
      <img src="https://assets.ajmadison.com/image/upload/c_limit,f_auto,fl_lossy.progressive,h_1000,q_auto,w_1000/v1/ajmadison/images/large_no_watermark/ffhi1832ts-frigidaire-30-inch-top-freezer-freestanding-stainless-steel-lifestyle-59ee43b97ce63_68e8b.jpg"
      style={{
      display:"block",
      margin:"auto",
      width:"100%",
      objectFit:"fill",
    }}
    alt="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ix1ib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
       <img src="https://news-cdn.softpedia.com/images/news2/Hands-On-Lenovo-IdeaPad-Y70-Gaming-Laptop-with-Touch-Screen-457906-2.jpg"
      style={{
      display:"block",
      margin:"auto",
      width:"100%",
      position:"sticky",
      objectFit:"fill",
    }}
    alt=""
    />
      <img src="https://static.techspot.com/images2/news/ts3_thumbs/2020/10/2020-10-09-ts3_thumbs-518.jpg"
      style={{
      display:"block",
      margin:"auto",
      width:"100%",
      objectFit:"fill",
    }}
    alt=""
    />
      <img src="https://vibeconsulting.co/wp-content/uploads/2017/07/dreamstime_m_47068225.jpg"
      style={{
      display:"block",
      margin:"auto",
      width:"100%",
      objectFit:"fill",
    }}
    alt=""
    />
    </Carousel>
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </>
      );
};

export default Home;
