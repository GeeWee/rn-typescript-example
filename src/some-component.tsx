import React from 'react';
import {
	AppRegistry,
	Text,
	View
} from 'react-native';

export const SomeComponent = () => {
	return (
	<View
		style={{
			flex: 1, justifyContent: 'center', alignItems: 'center'
		}}
	>
		<Text>Hello, Typed world</Text>
	</View>
	)
};