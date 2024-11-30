import { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Navigate
} from 'react-router-dom';

import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Artwork from './components/Artwork';
import ArtistList from './components/ArtistList';
import QnA from './components/Q&A';
import About from './components/About';
import ArtistProfile from './pages/ArtistProfile';
import Dashboard from './pages/Dashboard';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Dashboard></Dashboard> */}
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/artist" element={<ArtistProfile/>}></Route>

        {/* <div className="w-screen min-h-screen bg-zinc-900">
          <Navbar></Navbar>
          <Dashboard></Dashboard> */}
          {/* <ArtistProfile></ArtistProfile> */}

          {/* <div className='pt-28'>
            <Home></Home>
            <About></About>
            <Artwork></Artwork>
            <ArtistList></ArtistList>
            <QnA></QnA>  
          </div> */}
        {/* </div> */}

      </Routes>
    </Router>
  )
}

export default App

//info = Buy NFT, sell NFT, place bit
//Features pack = songs
