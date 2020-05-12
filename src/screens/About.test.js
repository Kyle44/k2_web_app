import React from 'react';
import About from './About';
import {shallow} from 'enzyme';

describe('About', () => {
	const about = shallow(<About/>);

	it('renders properly', () => {
		expect(about).toMatchSnapshot();
	});
});
