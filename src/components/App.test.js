import React from 'react';
import App from "./App";
import {shallow} from 'enzyme';

describe('App', () => {
	const app = shallow(<App/>);

	it('renders properly', () => {
		expect(app).toMatchSnapshot();
	});

	describe('clicks on navigation button', () => {
		
		it('should go Home', () => {
			app.find(".homeBtn").simulate("click");
			expect(app.find("Home").exists()).toBe(true);
		});

		it('should go to About', () => {
			app.find(".aboutBtn").simulate("click");
			expect(app.find("About").exists()).toBe(true);
		});

		it('should go to Contact', () => {
			app.find(".contactBtn").simulate("click");
			expect(app.find("Contact").exists()).toBe(true);
		});

		it('should go to Cart', () => {
			app.find(".cartBtn").simulate("click");
			expect(app.find("Cart").exists()).toBe(true);
		});
	});
});