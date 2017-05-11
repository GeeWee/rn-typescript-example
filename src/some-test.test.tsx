import 'jest';
import React from 'react';
import * as renderer from 'react-test-renderer';
import { Text, View } from 'react-native';

interface SomeInterface {
	foo: string,
	bar: number
}

describe('Basic breakpoints and sourcemaps', () => {
	it('Should show you the value of the variables the whole way through', () => {
		const x = 2;
		let y = 3;
		y = 3;
		y = 4;
		y = 5;
		y = 6;
		y = 3;
		let z = x + y;
		//debugger;
		const foo = 34;
		expect(z).toEqual(5);
	});
});

const SomeComponent = () => {
	return (
		<View>
			<Text>
				Hello world
			</Text>
		</View>
	)
};

describe('Some component', () => {
	it('Should render via react test renderer', () => {
		const jsonObject = renderer.create(<SomeComponent />).toJSON();
		expect(jsonObject).toMatchSnapshot();
	});
});