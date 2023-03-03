// import logo from "./logo.svg";
// import './App.css';
import "./assets/css/app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      {/* <h1 className="text-5xl text-blue-900 ml-52 mt-20">Esa</h1> */}
    </div>
  );
}

export default App;
