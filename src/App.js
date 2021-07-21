import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { HOME } from "./HOME";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <HOME />
        </Route>
        <Route path="/Page1">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
