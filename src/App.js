import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element = {<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/contact" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
