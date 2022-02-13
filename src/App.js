import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import HeaderBanner from "./HeaderBanner";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51KRaHwLrR9GFTjySQ8c8qS9A88SpAvdK9ecbT7IbY0bEuHQwwiLkVHP3f0Jz9LflSfFHcLw3TMBUqwsbnAf17riU00VClh4d5D"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/orders">
          <Header></Header>
          <Orders></Orders>
        </Route>
        <Route path="/checkout">
          <Header></Header>
          <HeaderBanner></HeaderBanner>
          <Checkout></Checkout>
        </Route>
        <Route path="/payment">
          <Header></Header>
          <Elements stripe={promise}>
            <Payment></Payment>
          </Elements>
        </Route>
        <Route path="/">
          <Header></Header>
          <HeaderBanner></HeaderBanner>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
