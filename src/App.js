import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './screens/Home';
import Cart from './screens/Cart';
import About from './screens/About';
import Contact from './screens/Contact';
import './index.css';
import { FaShoppingCart} from 'react-icons/fa';


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
                <div className='container'>
					<div className="navbar sticky">
						<div><NavLink exact to="/">Home</NavLink></div>
						<div><NavLink exact to="/about">About</NavLink></div>
						<div><NavLink to="/contact">Contact</NavLink></div>
						<div><NavLink to="/cart">CART <FaShoppingCart/></NavLink></div>
					</div>
					<div className="content">
                        <Route exact path="/" render={(props) => <Home />} />
						<Route path="/about" render={(props) => <About />} />
						<Route path="/contact" render={(props) => <Contact />} />
						<Route path="/cart" render={(props) => <Cart />} />
					</div>
                    

                </div>
            </HashRouter>
        ); // end return
    } // end render
} // end App component
