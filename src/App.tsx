import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';



import "./fonts/Starjedi.ttf";
import "./fonts/Starjhol.ttf";
import "./fonts/FranklinGothic.otf";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        {/* <Routes>
          <Route path='/'/>
        </Routes> */}
      </Router>
    </div> 
  );
}

export default App;
