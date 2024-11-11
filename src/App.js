import React, { useState } from 'react';
import Child from './compo/Child';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Debugging React App</h1>
      <button onClick={increment}>Increment</button>
      <Child count={count} />
    </div>
  );
}

export default App;
