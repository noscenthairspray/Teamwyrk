import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" />
            <Route path="/about" />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/contact" />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Remove h1 tag when landing page is ready */}
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        TeamWyrk Coming Soon.
      </h1>
    </div>
  );
}

export default App;
