import 'jest';
import { SomeComponent } from '../some-component';

describe('Basic breakpoints and sourcemaps', () => {
	it('Should show you the value of the variables the whole way through', () => {
		const x = 2;
		let y = 3;
		let z = x + y;
		expect(z).toEqual(5);
	});
});

describe('Some component', () => {
	it('Should import', () => {
		const component = SomeComponent;
		expect(component).toBeDefined();
	});
});