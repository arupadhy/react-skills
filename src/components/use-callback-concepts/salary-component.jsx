import React from 'react';

export default function SalaryComponent({salary, increment}) {

console.log('rendering SalaryComponent');

    return (
        <div>
          <span>Salary: {salary}</span>
          <button onClick={() => increment({ type: 'incrementSalary' })}> Increment Salary </button>
        </div>
    );
}