import React, { Children } from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import {
  createBrowserRouter,
  router,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

// swiggy API: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.50255414116582&lng=78.39727610349655&restaurantId=56096&submitAction=ENTER
