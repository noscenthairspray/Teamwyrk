import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";
import styles from "./Header.module.css";
import ProfileDropDown from "./ProfleDropDown";

const activeStyle = {
  borderBottom: "3px solid #222f65",
  paddingTop: "3px",
};

const Header = () => {
  const { user, isAuthenticated } = useAuthState();

  return (
    <header className={styles.navHeader}>
      <nav className={styles.navContainer}>
        <Link to="/">
          <div className={styles.navBrand}>
            <span className={styles.brandText}>TeamWyrk</span>
            <span className={styles.builtByText}>built by Bootcamp2</span>
          </div>
        </Link>
        <div className={styles.linkWrapper}>
          <ul className={styles.navLinks}>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/request"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Requests
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <a
                href="https://airtable.com/shrDiI6bJ3SaDJE5V"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className={styles.accessButtons}>
            {isAuthenticated ? (
              <ProfileDropDown user={user} />
            ) : (
              <>
                <Link to="/signin">
                  <button className={styles.signInButton}>Log In</button>
                </Link>
                <Link to="/signup">
                  <button className={styles.signUpButton}>Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
