import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextPorvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './components/routing.js/ProtectedRoute';
import PostContextProvider from './contexts/PostContext';


function App() {
  return (
    <AuthContextPorvider>
      <PostContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>}/>
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>}/>
          <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
      </PostContextProvider>
    </AuthContextPorvider>
  );
}

export default App;
