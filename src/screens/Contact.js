import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


export default class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}


	render() {
		return (
			<div>
				<h1 className="title">Contact</h1>
			</div>

		);
	}
}
