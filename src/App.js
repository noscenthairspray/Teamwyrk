import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Form from "./pages/RequestPage/Form";
import Feed from "./pages/RequestPage/Feed";
import "./style/global.css";
import { AuthProvider } from "./stores/context/AuthContext";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* AuthProvider wrapper provides updates to any components below that receives auth user value from AuthContext */}
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/contact" />
              <Route path="/account" element={<Account />} />
              <Route path="/request" element={<Feed />} />
              <Route path="/request/form" element={<Form />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
