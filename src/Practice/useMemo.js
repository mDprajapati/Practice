import React, { useState, useMemo } from 'react';

 function UseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = React.useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);
  
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      {inc}
    </div>
  );
}
function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemo;