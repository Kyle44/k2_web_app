import React from 'react';
import Cart from './Cart';
import { shallow } from "enzyme";


describe('Cart', () => {
	const cart = shallow(<Cart/>);
	it('renders properly', () => {
		expect(cart).toMatchSnapshot();
	});
});