import React, {useReducer} from 'react';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
          return { count: state.count + 1 }
        case 'decrement':
          return { count: state.count - 1 }
        case 'reset':
          return { count: 0}
        default:
          return state;
    }
}

export default function ReducerComponent() {
    const initialState = {
        count: 0
    };

    const [{count}, dispatch] = useReducer(reducer, initialState);
/*
Syntax of useReducer()
    const [newState, dispatch] = useReducer((currentState, action) => {

    }, initialState);

*/
    return (
        <div>
          <p> Coming from reducer component..count: {count} </p>
          <button onClick = {() => dispatch('increment')}>Increment</button>
          <button onClick = {() => dispatch('decrement')}>Decrement</button>
          <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    )
}