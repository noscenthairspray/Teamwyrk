import Header from "./Header";

//Layout Component is a wrapper for all pages
//It will display Header - Content(children components) - Footer on all pages
//<Layout /> is used in App.js

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Footer Component Here */}
    </>
  );
};

export default Layout;
