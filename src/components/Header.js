import reactLogo from "../../Assets/images/logo.jpg";
import Title from "./Title";
// import cartIcon from "../img/cart-icon.png";
import userLogin from "../../Assets/images/in-user-account.png";
import userLogout from "../../Assets/images/out-user-account.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";

// console.log("cartItems", cartItems.length);
const navLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Us" },
  { path: "/instamart", title: "Instamart" },
  { path: "/help", title: "Help" },
  // { path: "/cart", title: "Cart" },
  { path: "/signin", title: "SignIn" },
];

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const online = useOnline();
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <header className="flex bg-green-600 justify-between">
      <Title imgPath={reactLogo} />
      {online ? "online" : "offline"}
      <div className="flex">
        <ul className="flex items-center">
          {navLinks.map((item, index) => {
            return (
              <li key={index} className="p-2.5">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          <li className="p-2.5">
            <Link to="/cart">Cart{cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
