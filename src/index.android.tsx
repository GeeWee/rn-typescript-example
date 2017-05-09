import React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import { SomeComponent } from './some-component';

interface Props {
    foo: string,
    bar: number
}

export default class badgeExplorerTS extends React.Component<Props, {}> {
    render() {
        console.log('weee');
        const hi = 3;
        const xxx = hi + 5;
        
        return (
            <SomeComponent/>
        )
    }
}

AppRegistry.registerComponent('badgeExplorerTS', () => badgeExplorerTS);
