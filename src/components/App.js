import React, {Component} from 'react';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import About from '../screens/About';
import Contact from '../screens/Contact';
import '../index.css';
import { FaShoppingCart} from 'react-icons/fa';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: <Home/>,
        };
    } // end constructor

	goToPage = (page) =>{
		this.setState({ currentPage: page})
	}

    render() {
        return(
			<div className="page">
				<div className='container'>
					<div className="navbar sticky">
						<button className="homeBtn" onClick={()=>this.goToPage(<Home/>)}>Home</button>
						<button className="aboutBtn" onClick={()=>this.goToPage(<About/>)}>About</button>
						<button className="contactBtn" onClick={()=>this.goToPage(<Contact/>)}>Contact</button>
						<button className="cartBtn" onClick={()=>this.goToPage(<Cart/>)}>CART<FaShoppingCart/></button>
					</div>
				</div>
				<div className="content">
					{this.state.currentPage}
				</div>
			</div>
        ); // end return
    } // end render
} // end App component
