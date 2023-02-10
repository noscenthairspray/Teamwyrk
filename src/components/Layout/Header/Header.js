import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  // //assigning location variable
  // const location = useLocation();

  // //destructuring pathname from location
  // const { pathname } = location;

  // const activeRequest = pathname === "/request" ? styles.active : "";
  return (
    <header>
      <nav className={styles.navContainer}>
        <Link to="/">
          <div className={styles.navBrand}>
            <span className={styles.brandText}>TeamWyrk</span>
            <span className={styles.builtByText}>built by Bootcamp2</span>
          </div>
        </Link>
        <div className={styles.linkWrapper}>
          <ul className={styles.navLinks}>
            {/* <li className={activeRequest}>
              <Link to="/request">Requests</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={styles.accessButtons}>
            <Link to="/signin">
              <button className={styles.signInButton}>Log In</button>
            </Link>
            <Link to="/signup">
              <button className={styles.signUpButton}>Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
