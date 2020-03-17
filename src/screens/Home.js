import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }


    render() {
        return (
			<div className='container'>
				<div>
					<h1 className="title">K<sup>2</sup></h1>
					<h2 className="title">Home Screen</h2>
				</div>
			</div>

            
        );
    }
  }
