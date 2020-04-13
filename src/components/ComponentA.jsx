import React, { Component, PropTypes } from 'react';
import ComponentB from './ComponentB';
/*
  Main --> A --> B ---> C
  Need to pass some prop to C from Main without touching A and B
  Context api is handy in such cases
*/

class ComponentA extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
            <p> Coming from Component A</p>
            <ComponentB />
            </div>
        );
    }
}

ComponentA.propTypes = {

};

export default ComponentA;