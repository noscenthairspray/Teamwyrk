import Header from "./Header";
import { Outlet } from "react-router-dom";

//Layout Component is a wrapper for all pages
//It will display Header - Content(children <Outlet />) - Footer on all pages
//<Layout /> is used in App.js

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* <-- nested children routes rendered here! */}
      </main>
      {/* Footer Component Here */}
    </>
  );
};

export default Layout;
