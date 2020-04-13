import React, { Component, PropTypes } from 'react';
import ComponentC from './ComponentC';
import ComponentUsingContextViaHooks from './componentCUsingHooks';

class ComponentB extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <p> I am from component B</p>
                       <ComponentC />
                       /* This demonstrates usage of context api using hooks */
                       <ComponentUsingContextViaHooks />

            </div>
        );
    }
}

ComponentB.propTypes = {

};

export default ComponentB;