import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ProvideAuth } from '../hooks/use-auth';

import Layout from './Layout';
import AuthPage from '../pages/AuthPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

// update meta tags

function App() {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <HelmetProvider>
          <Helmet>
            <title>Chingu journal</title>
          </Helmet>
          <ProvideAuth>
            <Router>
              <Layout>
                <Switch>
                  <Route path='/' component={LandingPage} exact />
                  <Route
                    path='/auth/:formTypeParam'
                    component={AuthPage}
                    exact
                  />
                  <Route path='/homepage' component={HomePage} exact />
                  <Route path='*' component={NotFoundPage} />
                </Switch>
              </Layout>
            </Router>
          </ProvideAuth>
        </HelmetProvider>
      </div>
    </>
  );
}

export default App;
