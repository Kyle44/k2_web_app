import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }


    render() {
        return (
            <div>
                <p>Cart</p>
				<button className="square">
                    {/* TODO */}
                </button>              
            </div>
			    
        );
    }
}
