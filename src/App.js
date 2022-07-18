import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/auth' />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/userdata'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
