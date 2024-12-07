import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
