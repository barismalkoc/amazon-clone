import { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

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
        <Route path="/checkout">
          <Header></Header>
          <Checkout></Checkout>
        </Route>
        <Route path="/">
          <Header></Header>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
