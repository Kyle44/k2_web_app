import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import './index.css';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }


    render() {
        return (
            <Home/>
        );
    }
}
