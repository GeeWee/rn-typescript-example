/**
 * TODO: Describe file contents
 */
const tsc = require('typescript');
const babelJest = require('babel-jest');
const tsJestPreprocessor = require('./node_modules/ts-jest/preprocessor');

module.exports = {
	process(src, path, config, transformOptions) {
		console.log('Source was');
		console.log(src);

		//console.log(path);
		//console.log(config);
		//console.log(transformOptions);
		const isTs = path.endsWith('.ts');
		const isTsx = path.endsWith('.tsx');
		
		if (isTs || isTsx) {
			src = tsJestPreprocessor.process(src, path, config, transformOptions);

			console.log('New source');
			console.log(src);
			
			// update the path so babel can try and process the output
			path = path.substr(0, path.lastIndexOf('.')) + (isTs ? '.js' : '.jsx') || path;
		}
		
		
		if (path.endsWith('.js') || path.endsWith('.jsx')) {
			src = babelJest.process(src, path, config, transformOptions);
		}
		
		console.log('Source after babel');
		console.log(src);
		
		return src;
	},
};

function compileTypeScript(src, path) {

}