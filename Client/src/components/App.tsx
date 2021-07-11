import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from '../hooks/use-auth';

import Layout from './Layout';
import HomePage from '../pages/Homepage';

import { fetchUsers, fetchJournalEntries } from '../config/data';
import { JournalEntrie, UserData } from './interfaces/userInterfaces';
// here would be pages within a router, initial fetch calls, state management and context api useage.

// const simulatedApiCall: Promise;

function App() {
  const fetchUserData = async () => {
    const userData = await fetchUsers();
    const userPosts = await fetchJournalEntries();
    // todo grab user id and populate user posts with posts = user id, this will be done in the backend on login
    const user = userData[0];
    const posts = userPosts.filter(
      (post: JournalEntrie) => post._id === user._id
    );
    setUserData({ user, posts });
    setIsLoading(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>();
  // userContext = useContext(userData);

  useEffect(() => {
    if (isLoading) {
      fetchUserData();
    }

    console.log(userData);
  }, [isLoading, userData]);

  if (isLoading) {
    return <div>loader</div>;
  }

  return (
    <div className='App'>
      <ProvideAuth>
        <Router>
          <GlobalStyles />
          <Layout loggedIn={userData?.user ? true : false}>
            <Route path='/' component={HomePage} exact />
          </Layout>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
