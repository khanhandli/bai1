import React, { Children, Component } from 'react';

class Demo extends Component {
    render() {
        return React.createElement('', {}, Children);
    }
}
export default Demo;
