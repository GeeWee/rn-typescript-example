import 'jest';

describe('Basic breakpoints and sourcemaps', () => {
	it('Should show you the value of the variables the whole way through', () => {
		const x = 2;
		let y = 3;
		let z = x + y;
		//Uncomment this to have it stop at the line above.
		debugger;
		expect(z).toEqual(5);
	});
});