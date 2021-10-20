import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {MdAccountCircle } from "react-icons/md";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sign from '../Sign';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
 import "./Headers.css"
import {
  Badge,
  Button,
  Dropdown,
  Nav,
} from "react-bootstrap";
import { Container, FormControl, Navbar } from 'react-bootstrap';
const Headers = (product) => {
  const {
    state:{cart},
    dispatch,
  }=CartState();
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
<Navbar.Brand>
<Link to ="/"><h3><strong>Shopping Cart</strong></h3></Link>
</Navbar.Brand>
  <Navbar.Text className="search">
    <FormControl style={{width: 700,
    height:40}} placeholder="Search a product"
      className="m-auto">
    </FormControl>
  </Navbar.Text>
  <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" marginRight="80px"/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370}}>
            {cart.length > 0 ? (
              <>
              {cart.map((prod) => (
                    <span className="cartitem" key={product._id}>
                    <img className="product-image" src={product.Image} alt="product"></img>
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
              </>
            ):
              <span style={{padding: 10}}>cart is empty!</span>}
            </Dropdown.Menu>
            {/* {/* <AccountCircleIcon color="white" fontSize="25px"/ */}
            </Dropdown>
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
            <Link to= "/Sign"><MdAccountCircle color="white" fontSize="25px" /></Link>
              {/* <Badge>{cart.length}</Badge> */}
            </Dropdown.Toggle>
            {/* {/* <AccountCircleIcon color="white" fontSize="25px"/ */}
            </Dropdown>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headers































































// import { IconButton } from '@material-ui/core'
// import React from 'react'
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import "./Headers.css"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';
// const Headers = () => {
//     return (
//         <>
//        <div className="header">
//        <Link to="/">
//             <img src="https://th.bing.com/th/id/OIP.3ZJg2P-fzfHw3pjJyUJMuQHaE8?pid=ImgDet&rs=1" className="logo"/>
//        </Link>
//        <div className="header_search">
//            <input type="text" placeholder="Search Your Products Here"></input>
//            <IconButton>
//                <ManageSearchIcon className="header_searchicon"></ManageSearchIcon>
//            </IconButton>

//        </div>
//        <div className="header_nav">
//         <div className="header_option">
//             <span className="header_option1">Hi</span>
//             <span className="header_option2">Sign in</span>
//         </div>
//         <div className="header_option">
//             <span className="header_option1">Place</span>
//             <span className="header_option2">Return</span>
//         </div>
//         <div className="header_option">
//             <span className="header_option1">Your</span>
//             <span className="header_option2">Prime</span>
//         </div>
//         <div className="header_addtocart">
//             <Link to ="/cart">
//             <IconButton>
//                 <ShoppingCartIcon>
//                 </ShoppingCartIcon>
//                 <span>2</span>
//             </IconButton>
//             </Link>
//         </div>
//        </div>
//        </div>
//        <div className="header_bottom">
//           {/* <ul>
//               <li>mobile</li>
//               <li>tv</li>
//               <li>toys</li>
//               <li>cups</li>
//               <li>engines</li> */}
//               {/* <li>
//                   <img src="https://th.bing.com/th/id/OIP.Aphz8-F_cinnQcMC-vVD5wHaER?pid=ImgDet&rs=1"/>
//               </li> */}
//           {/* </ul> */}
//        </div>
//        </>
//     )
// }

// export default Headers
