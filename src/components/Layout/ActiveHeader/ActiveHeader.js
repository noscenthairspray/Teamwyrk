import { Link } from "react-router-dom";
import styles from "./ActiveHeader.module.css";
import Button from '@mui/material/Button';

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
                <Link to="/request/form">
                  <Button variant="text">Request Feed</Button>
                </Link> 
            </li>
            <li>
              <Link to="/about">
                <Button variant="text">About</Button>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <Button variant="text">FAQ</Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button variant="text">Contact Us</Button>
              </Link>
            </li>
          </ul>
        
        <div className={styles.accessButtons}>
          
        </div>

        </div>
      </nav>
    </header>
  );
};

export default ActiveHeader;