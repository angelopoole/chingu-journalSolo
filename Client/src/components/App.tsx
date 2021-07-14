import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProvideAuth } from '../hooks/use-auth';

import Layout from './Layout';
import Loader from './Loader';
import HomePage from '../pages/Homepage';
import AuthPage from '../pages/AuthPage';

function App() {
  return (
    <div className='App'>
      <ProvideAuth>
        <Router>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route path='/auth/:formTypeParam' component={AuthPage} exact />
              <Route path='/loaderTest' component={Loader} />
              <Route path='/' component={HomePage} exact />
            </Switch>
          </Layout>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
