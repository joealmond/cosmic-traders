import { Link } from "react-router-dom";

import logo from "./logo.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/cosmic-traders">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/outpost">Outpost</Link>
      </div>
      <div>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default Header;
