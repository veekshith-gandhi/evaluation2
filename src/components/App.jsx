import { Route, Router, Switch } from "react-router-dom";
import Layout from "./layout";
import HomeView from "../view/Home";
import CartView from "../view/Cart";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/cart" component={CartView} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
