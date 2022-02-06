import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
