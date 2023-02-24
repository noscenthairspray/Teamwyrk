import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Landing from "./pages/Landing";
import RequestFeed from "./pages/RequestFeed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RequestForm from "./pages/RequestForm";
import "./style/global.css";
import { AuthProvider } from "./stores/context/AuthContext";

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
              <Route path="/request" element={<RequestFeed />} />
              <Route path="/request/form" element={<RequestForm />} />
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
