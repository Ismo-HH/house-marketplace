import React, { Component, useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Explore from './pages/Explore.jsx';
import Offers from './pages/Offers.jsx';
import Category from './pages/Category.jsx';
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import CreateListing from './pages/CreateListing.jsx';
import EditListing from './pages/EditListing.jsx';
import Listing from './pages/Listing.jsx';
import Contact from './pages/Contact.jsx';
import './assets/App.css';

class App extends Component {
  state = {
    theme: "light",
  ***REMOVED***
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light",
    }));
  ***REMOVED***

  
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/category/:categoryName' element={<Category />} />
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/create-listing' element={<CreateListing />} />
            <Route path='/edit-listing/:listingId' element={<EditListing />} />
            <Route
              path='/category/:categoryName/:listingId'
              element={<Listing />}
            />
            <Route path='/contact/:landlordId' element={<Contact />} />
          </Routes>
          <Navbar />
        </Router>

        <ToastContainer />
      </>
    );
  }
}

export default App;
