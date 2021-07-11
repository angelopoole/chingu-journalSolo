import { promises } from 'fs';
import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles';

// here would be pages within a router, initial fetch calls, state management and context api useage.

// const simulatedApiCall: Promise;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log(promises);
  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading]);

  return (
    <div className='App'>
      <GlobalStyles>
        <div>this is app</div>
      </GlobalStyles>
    </div>
  );
}

export default App;
