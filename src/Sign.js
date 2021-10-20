import { IconButton, Link } from '@material-ui/core'
import React from 'react'
import "./Sign.css"
import {Route} from "react-router-dom";
import NewAccount from './NewAccount';
function Sign() {
    return (
        <div className="Sign">
        <div>
        <div className="Sign_Container">
            <div className="Sign_title">
                Sign in</div>
                <div className="Grid_input">
                    <div className="Email_input">
                        <label>E-mail :</label>
                        <input type="Email" placeholder="Enter Your Mail"/>
                    </div>
                    <div className="Password_input">
                        <label>Password :</label>
                        <input type="Password" placeholder="Enter Your Password"/>
                    </div>
                </div>
                <p></p>
                <div className="Buttons">
                    <button className="button">Sign In</button>
                </div>
                <div className="Create_new_account">
                <div>New user?</div>
                <div className="new account" style={{color:"blueviolet",
                cursor:"pointer"}}><Link to ="/NewAccount">new account</Link></div>
                </div>
            </div>
        </div>
        <main className="main">
            <div className="content">
            <Route path="/NewAccount" component={NewAccount}/>
            </div>
            </main>
            </div>
    )
}

export default Sign
