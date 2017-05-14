import 'jest';
import 'react-native';
import React from 'react';
import { SomeComponent } from '../some-component';
import renderer from 'react-test-renderer';

describe('Basic breakpoints and sourcemaps', () => {
	it('Should show you the value of the variables the whole way through', () => {
		const x = 2;
		let y = 3;
		debugger;
		let z = x + y;
		expect(z).toEqual(5);
	});
});

describe('Some component', () => {
	it('Should import', () => {
		const component = SomeComponent;
		expect(component).toBeDefined();
	});
	
	
	it('Should render', () => {
		const renderedComponent = renderer.create(<SomeComponent />).toJSON();
		expect(renderedComponent).toMatchSnapshot();
	});
});