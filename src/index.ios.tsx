import * as React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class badgeExplorerTS extends React.Component<{}, {}> {
    render() {
        console.log('weee');
        return (
            <View
                style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Text>Hello, Typed world</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('badgeExplorerTS', () => badgeExplorerTS);
