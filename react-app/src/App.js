import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage/HomePage';
import DeckView from './components/DeckView/DeckView';
import DeckEdit from './components/DeckView/DeckEdit/DeckEdit';
import NavBar from './components/NavBar/NavBar';
import DeckListing from './components/DeckListing/DeckListing';
import MyGames from './components/MyGames/MyGames';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/decks' exact={true} >
          <DeckListing />
        </Route>
        <Route path='/my-games' exact={true} >
          <MyGames />
        </Route>
        <Route path='/decks/new' exact={true} >
        <div className="DeckViewBackground">
            <div className="DeckViewContainer">
              <DeckEdit/>
          </div>
        </div>
        </Route>
        <Route path='/decks/:deckId' exact={true} >
          <DeckView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
