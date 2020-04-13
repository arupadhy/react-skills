import React, { Component, PropTypes } from 'react';
import { UserContext, ChannelContext } from '../App';

class ComponentC extends Component {
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
            <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                     {
                         channel => {
                             return <div>Coming from componentC {user.name} {user.age} {channel.salary}</div>;
                         }
                     }
                    </ChannelContext.Consumer>
                    )
                    
                }
            }
            </UserContext.Consumer>
            </div>
        );
    }
}

ComponentC.propTypes = {

};

export default ComponentC;