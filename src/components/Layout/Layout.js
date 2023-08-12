import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

//Layout Component is a wrapper for all pages
//It will display Header - Content(children <Outlet />) - Footer on all pages
//<Layout /> is used in App.js

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      {<Header />}
      <main className={styles.layoutMain}>
        <Outlet /> {/* <-- nested children routes rendered here! */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
