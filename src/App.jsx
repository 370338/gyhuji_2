import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Owen from "./pages/Owen";
import Art from "./pages/Art";
import Design from "./pages/Design";
//import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/about/owen" element={<Owen />} />
        <Route path="/works/art" element={<Art />} />
        <Route path="/works/design" element={<Design />} />
        {/*<Route path="/about/resume" element={<Resume />} />*/}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

/*
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
*/

export default App;
