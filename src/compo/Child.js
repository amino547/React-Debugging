import React from 'react';

function Child({ count }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>The count from parent is: {count}</p>
    </div>
  );
}

export default Child;
