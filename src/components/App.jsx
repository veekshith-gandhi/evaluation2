import { Route, Router, Switch } from "react-router-dom";
import Layout from "./layout";
import history from "../history";
import HomeView from "../view/Home";
import CartView from "../view/Cart";

export const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cart" component={CartView} />
        </Switch>
      </Layout>
    </Router>
  );
};
