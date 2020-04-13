import React, {useReducer} from 'react';
import CountComponent from './count-component';
import SalaryComponent from './salary-component';
import TitleComponent from './title-component';

const initialState = {
    age: 25,
    salary: 100,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'incrementAge':
          return {...state, age: state.age + 1}
        case 'incrementSalary':
          return {...state, salary: state.salary + 1}  
        default:
          return state;
    }

    return state;
}

export default function UseCallBackWithMemoComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

console.log('rendering use-callback-concepts- index.js ');
    return (
        <div>
          <TitleComponent />
          <CountComponent age={state.age} increment={dispatch}/>
          <SalaryComponent salary={state.salary} increment={dispatch}/>
        </div>
    )
}