import React from 'react';

export default function CountComponent({age, increment}) {

console.log('rendering CountComponent');
    return (
        <div>
          <span> Age-{age}</span>
          <button onClick={() => increment({ type: 'incrementAge' })}>Increment Age</button>
        </div>
    )
}