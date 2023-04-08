import reactLogo from "../../Assets/images/logo.jpg";
import Title from "./Title";
// import cartIcon from "../img/cart-icon.png";
import userLogin from "../../Assets/images/in-user-account.png";
import userLogout from "../../Assets/images/out-user-account.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <header className="headerContent">
      <Title imgPath={reactLogo} />
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
          {/* <li><img src={cartIcon} alt="cart" style={{width:30}}/></li> */}
          <li>
            {/*  {
                        isLogged ?  
                       ( <button onClick={() => setIsLogged(false)} className='log-btn' style={{width:'30px', height:'30px', backgroundImage: "url()" }}></button>) : 
                       ( <button onClick={() =>  setIsLogged(true)} className='log-btn' style={{width:'30px', height:'30px', backgroundImage:{userLogout}}}></button>)
                    } */}

            {isLogged ? (
              <button className="log-btn" onClick={() => setIsLogged(false)}>
                Logout{" "}
                <img
                  src={userLogout}
                  alt="logout"
                  style={{ width: 30, padding: "0px 5px" }}
                />
              </button>
            ) : (
              <button className="log-btn" onClick={() => setIsLogged(true)}>
                Login{" "}
                <img
                  src={userLogin}
                  alt="logout"
                  style={{ width: 30, padding: "0px 5px" }}
                />
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
