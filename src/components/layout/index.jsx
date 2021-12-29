import { Provider } from "react-redux";
import store from "../../store";
import AlertMiddleware from "../middleware";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <AlertMiddleware>
        <Header />
        <main>{children}</main>
        <Footer />
      </AlertMiddleware>
    </Provider>
  );
};

export default Layout;
