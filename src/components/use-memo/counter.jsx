import React, {useState, useMemo} from 'react';

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    // needs to cache this value and update only if counterOne changes
    // lets say this function was complex enough
    // useMemo (caches the result of the function) vs useCallback (caches the function)
    const isEven = useMemo(() => {
        return counterOne % 2 === 0;
    }, [counterOne])

    return (
        <div>
           <button onClick={incrementOne}>CounterOne {counterOne}</button>
           <span>{isEven ? 'Even' : 'Odd' }</span>
           <br/>
           <button onClick={incrementTwo}>CounterTwo {counterTwo}</button>
           <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
    );
}

export default Counter;