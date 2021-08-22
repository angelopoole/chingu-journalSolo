import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProvideAuth } from '../hooks/use-auth';

import Layout from './Layout';
import AuthPage from '../pages/AuthPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <ProvideAuth>
          <Router>
            <Layout>
              <Switch>
                <Route path='/auth/:formTypeParam' component={AuthPage} exact />
                <Route path='/' component={HomePage} exact />
                <Route path='*' component={NotFoundPage} />
              </Switch>
            </Layout>
          </Router>
        </ProvideAuth>
      </div>
    </>
  );
}

export default App;
