import { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import ArtistProfile from './pages/ArtistProfile';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Authentication from './pages/Authentication';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Dashboard></Dashboard> */}
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/artist" element={<ArtistProfile/>}></Route>
        <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
        <Route path="/auth" element={<Authentication></Authentication>}></Route>

      </Routes>
    </Router>
  )
}

export default App

//info = Buy NFT, sell NFT, place bit
//Features pack = songs
