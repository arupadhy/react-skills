import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ReducerComponent from './components/use-reducers-concepts/reducer-component';
import ReducerComponentPartTwo from './components/reducer-context-memo-concepts/component-d';
import UseCallBackWithMemoComponent from './components/use-callback-concepts'
import Counter from './components/use-memo/counter';
import FocusInput from './components/use-ref/focus-input';
/*
Legacy way of creating context and leveraging in older react version
*/
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const channelData = { salary: '3432423423', currenty: 'USD' }
const loggedInUser = { name: 'Arvind', age: 35, sex: 'male' }

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={loggedInUser}>
        <ChannelContext.Provider value={channelData}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
      // useReducer example here
      <ReducerComponent /> */}
      {/* <ReducerComponentPartTwo /> */}
      <UseCallBackWithMemoComponent />
      <Counter />
      <FocusInput/>
    </div>
  );
}

export default App;
