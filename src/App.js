import './App.scss';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './components/Home/Home';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='App'>
            <Dashboard></Dashboard>
          </div>
        }
      >
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='gallery' element={<Gallery></Gallery>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
