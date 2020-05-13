import React from 'react';
import Home from './Home';
import { shallow } from "enzyme";

describe('Home', () => {
	const home = shallow(<Home/>);

	it('renders properly', () => {
		expect(home).toMatchSnapshot();
	});
});