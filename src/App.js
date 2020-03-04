import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './screens/Home';
import Cart from './screens/Cart';
import './index.css';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    } // end constructor


    render() {
        return(
            <HashRouter>
                <div>
                    <div className="content">
                        <Route exact path="/" render={(props) => <Home />} />
                        <Route path="/cart" render={(props) => <Cart />} />
                    </div>
                    <div className="navbar">
                        <div><NavLink exact to="/">Home</NavLink></div>
                        <div><NavLink to="/cart">Cart</NavLink></div>
						<div><NavLink exact to="/about">About</NavLink></div>
						<div><NavLink to="/contact">Contact</NavLink></div>
                    </div>

                </div>
            </HashRouter>

        ); // end return
    } // end render
} // end App component
