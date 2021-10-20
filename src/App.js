import React from 'react'
 import "./App.css";
 import {IconButton } from '@material-ui/core'
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import ManageSearchIcon from '@mui/icons-material/ManageSearch';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductScreen from './Screen/ProductScreen';
import { Link } from 'react-router-dom';
import Sign from "./Sign.js"
import Cart from './Components/Cart.js'
import Home from './Components/Home';
import NewAccount from './NewAccount.js';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useEffect,useState} from "react";
import Headers from './Components/Headers';
import commerce from './Css/Lb/Commerce';
import { BrowserRouter } from 'react-router-dom';
import ProceedtoPayment from './Components/ProceedtoPayment';





const App = () => {
// //   const [state,setstate]=useState([])
// //   const fetch=async()=>{
// //     const response=await commerce.products.list();
// //     console.log(response);
// //     setstate(response.data);
// //   }
// //   useEffect(()=>{
// // fetch();
// //   },[]);
//   return (
//     // <Router>
//        <div className="App">
//        <div className="Header">
//        <Link to="/Home">
//        <img src="https://th.bing.com/th/id/OIP.3ZJg2P-fzfHw3pjJyUJMuQHaE8?pid=ImgDet&rs=1" className="hi"/>
//         </Link>
//          <div>
//            <div className="Logo">
//            </div>
//          </div>
//          <div className="Search">
//            <input type="text" placeholder="Search Your items here"></input>
//            <IconButton>
//              <ManageSearchIcon className="Search_icon"/>
//              </IconButton>
//          </div>
//          <div className="Icon1">
//          <IconButton>
//            <ShoppingCartIcon></ShoppingCartIcon>
//            </IconButton>
//            </div>
//            <div className="Icon2">
//          <Link to ="/Sign"><IconButton>
//          <AccountCircleIcon/>
//          </IconButton>
//          </Link>
//        </div>
//        </div>
//        <div className="Categories">
//          <div>desktop</div>
//          <div>mobile</div>
//          <div>Clothes</div>
//          <div>fridges</div>
//          <div>Accessories</div>
//        </div>
//        <p></p>
//        <p></p>
//        <br/>
//        <p/>
//        <main className="main">
//             <div className="content">
//             <Route path="/Home" exact={true} component={Home}/>
//             <Route path="/ProductScreen" component={ProductScreen}/>
//             <Route path="/Sign" component={Sign}/>
//             </div>
//             </main>
//     </div>
//   );
return (
<BrowserRouter>
    <Headers/>
    <div>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/cart" exact>
      <Cart/>
      </Route>
        <Route path="/cart/ProceedtoPayment" exact>
    <ProceedtoPayment/>
    </Route>
    {/* </Route> */}
    <Route path="/Sign" exact>
      <Sign/>
    </Route>
    </div>
    </BrowserRouter>
);
}
// }

export default App

