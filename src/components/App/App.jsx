import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import PastComponent from '../PastComponent/PastComponent';
import DetailComponent from '../DetailComponent/DetailComponent';
import NewComponent from '../NewComponent/NewComponent';
import SleepComponent from '../SleepComponent/SleepComponent'
import FoodComponent from '../FoodComponent/FoodComponent';
import WaterComponent from '../WaterComponent/WaterComponent';
import FriendComponent from '../FriendComponent/FriendComponent';
import MoodComponent from '../MoodComponent/MoodComponent.jsx'
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import SubmitComponent from '../SubmitComponent/SubmitComponent';
import EditComponent from '../EditComponent/EditComponent';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/past">
            <PastComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/detail/:id">
              <DetailComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/new">
              <NewComponent />
            </ProtectedRoute>

            <ProtectedRoute
            exact path ="/sleep">
            <SleepComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/food">
            <FoodComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/water">
            <WaterComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/friend">
            <FriendComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/mood">
            <MoodComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/review">
            <ReviewComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/submit">
            <SubmitComponent />
          </ProtectedRoute>

          <ProtectedRoute
            exact path ="/edit">
            <EditComponent />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
