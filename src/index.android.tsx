import React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import { SomeComponent } from './some-component';

export default class badgeExplorerTS extends React.Component<{}, {}> {
    render() {
        return (
            <SomeComponent/>
        )
    }
}

AppRegistry.registerComponent('badgeExplorerTS', () => badgeExplorerTS);
