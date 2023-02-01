import { Link } from "react-router-dom";
import styles from "./ActiveHeader.module.css";

const ActiveHeader = () => {
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
            <li>
                <Link to="/request/form"> Request Feed</Link> 
            </li>
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

        </div>
      </nav>
    </header>
  );
};

export default ActiveHeader;