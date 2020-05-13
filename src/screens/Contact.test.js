import React from 'react';
import Contact from './Contact';
import { shallow } from "enzyme";

describe('Contact', () => {
	const contact = shallow(<Contact/>);

	it('renders properly', () => {
		expect(contact).toMatchSnapshot();
	});
});