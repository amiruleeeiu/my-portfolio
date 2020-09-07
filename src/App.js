import React from 'react';
import './App.css';
import PersistentDrawerLeft from './Component/Drawer/Drawer';

import Profile from './Component/Profile/Profile';
import DenseAppBar from './Component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './Component/Blog/Blog';
import Experence from './Component/Experence/Experence';
import ArticleDetails from './Component/ArticleDetails/ArticleDetails';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import { AuthContextProvider } from './Component/Login/useAuth';


function App() {
  
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <PersistentDrawerLeft></PersistentDrawerLeft>
          <Switch>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/Blog">
              <Blog></Blog>
            </Route>
            <Route path="/Experence">
              <Experence></Experence>
            </Route>
            <Route exact path="/">
              <Profile></Profile>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/:productKey">
              <ArticleDetails></ArticleDetails>
            </Route>
            
          </Switch>
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
