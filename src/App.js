import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Minmax from './Minmax'
import Dashboard from './Dashboard'

import AppNavbar from './components/NavBar';
import Counter from './Counter';

function App() {
  return (

    <Router>
      <div>

        <AppNavbar />
        <div>


          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/Minmax' element={<Minmax />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/Counter' element={<Counter />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App;
