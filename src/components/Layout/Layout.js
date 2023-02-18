import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

//Layout Component is a wrapper for all pages
//It will display Header - Content(children <Outlet />) - Footer on all pages
//<Layout /> is used in App.js

const Layout = () => {
  return (
    <>
      {<Header />}
      {/* <ActiveHeader /> */}
      <main>
        <Outlet /> {/* <-- nested children routes rendered here! */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
