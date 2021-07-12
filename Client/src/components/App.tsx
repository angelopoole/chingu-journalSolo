import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from '../hooks/use-auth';

import Layout from './Layout';
import HomePage from '../pages/Homepage';
import AuthPage from '../pages/AuthPage';

// import { fetchUsers, fetchJournalEntries } from '../config/data';
// import { JournalEntrie, UserData } from '../interfaces/userInterfaces';
// here would be pages within a router, initial fetch calls, state management and context api useage.

// const simulatedApiCall: Promise;

function App() {
  const fetchUserData = async () => {
    return console.log('lol');
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetchUserData();
    }
  }, [isLoading]);

  // if (isLoading) {
  //   return <div>loader</div>;
  // }

  return (
    <div className='App'>
      <ProvideAuth>
        <Router>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/auth' component={AuthPage} />
            </Switch>
          </Layout>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
