import { promises } from 'fs';
import React, { useState, useEffect } from 'react';

// here would be pages within a router, initial fetch calls, state management and context api useage.

// const simulatedApiCall: Promise;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading]);

  return (
    <div className='App'>
      <div>this is app</div>
    </div>
  );
}

export default App;
