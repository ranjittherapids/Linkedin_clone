import React, { useEffect } from 'react'
import './component/style/App.css';
import Header from './component/Header';
import Home from './component/Home';
import Basket from './component/Basket';
import Login from './component/Login'
import Payment from './component/Payment';
import CurrencyConverter from './CurrencyConverter/Index.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebased'
// import { loadStripe } from '@stripe/stripe-js';
// import {Elements} from "@stripe/react-stripe-js"
function App() {
  const [{ basket }, dispatch] = useStateValue()
  // const promise = loadStripe("pk_test_51JIqSDSHensC7bdDQ97YUaLkmUTZsexQPKvxT0BKeGCCsQbUi0514sDoO52693rX62KwTS79lGJIQHGarWdWWuN700NZmj6U3J");

  useEffect(() => {
    //only run once when the app component load
    auth.onAuthStateChanged(authUser => {
      console.log('rhe user is>>>>', authUser)
      if (authUser) {
        //user login
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //user logout
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            {/* <Elements stripe={promise}></Elements> */}
            <Payment />
          </Route>
          <Route path="/CurrencyConverter">
            <CurrencyConverter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
