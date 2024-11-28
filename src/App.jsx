import { useState } from 'react'; 
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Artwork from './components/Artwork';
import ArtistList from './components/ArtistList';
import Info from './components/Info';
import About from './components/About';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen min-h-screen bg-zinc-900">
        <Navbar></Navbar>
      
        <div className='pt-28'>
          <Home></Home>
          <About></About>
          <Artwork></Artwork>
          <ArtistList></ArtistList>
          <Info></Info> 
        </div>
   
      </div>
        
    </>
  )
}

export default App

//info = Buy NFT, sell NFT, place bit
//Features pack = songs
