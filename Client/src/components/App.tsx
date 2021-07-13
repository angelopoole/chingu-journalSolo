import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth, useAuth } from '../hooks/use-auth';

import Layout from './Layout';
import HomePage from '../pages/Homepage';
import AuthPage from '../pages/AuthPage';
import Loader from './Loader';

// console.log(useAuth);

function App() {
  const auth = useAuth();

  if (auth?.user) {
    console.log(auth?.user);
  }

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
              <Route path='/auth/:formTypeParam' component={AuthPage} exact />
              <Route path='/loaderTest' component={Loader} />
            </Switch>
          </Layout>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
