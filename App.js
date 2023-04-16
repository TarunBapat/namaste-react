import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import {
  createBrowserRouter,
  router,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Instamart from "./src/components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

// swiggy API: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.50255414116582&lng=78.39727610349655&restaurantId=56096&submitAction=ENTER
